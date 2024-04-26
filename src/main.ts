import * as fs from 'node:fs'
import * as path from 'node:path'
import { generate } from '@nicolas-chaulet/openapi-typescript-codegen';
import { Project } from 'ts-morph';
import { copyFile } from "node:fs/promises";

const removeOutDir = (outDirPath: string) => {
    const resolvedDir = path.resolve(outDirPath)
    const cwd = path.resolve()
    if(resolvedDir === "/") {
        throw new Error(`deleting root dir is not allowed`)
    }
    if(!resolvedDir.startsWith(cwd)) {
        throw new Error(`deleting dir outside of working dir is not allowed. out dir must be within working dir`)
    }
    // Delete all files and directories found in given outDirPath, without removing outDirPath itself.
    fs.readdirSync(resolvedDir).forEach(entry => {
        const toDelete = path.resolve(resolvedDir, entry)
        fs.rmSync(toDelete, {recursive: true, force: true})
    })
}

type RequiredPackageJsonData = {
    name: string;
    version: string;
    file?: never;
}

const basePackageJson = {
    "type": "module",
    "module": "./esm/index.js",
    "exports": {
        ".": {
            "import": "./esm/index.js"
        }
    },
    "_generatedBy": "@navikt/openapi-ts-clientmaker"
}


const createOutPackageJson = (outDir: string, inputPackageJson: RequiredPackageJsonData) => {
    // Merge input package json (specifying at least name and version) with the hardcoded base
    const packageJson = {
        ...inputPackageJson,
        ...basePackageJson
    }
    // write it to out/
    fs.writeFileSync(path.resolve(outDir, `package.json`), JSON.stringify(packageJson, undefined, 2))
}

const compile = async (tsConfigFilePath: string) => {
    const project = new Project({
        tsConfigFilePath,
    })
    for(const diagnostic of project.getPreEmitDiagnostics()) {
        console.info("ts: ", diagnostic.getMessageText())
    }
    const result = await project.emit()
    if(result.getEmitSkipped()) {
        console.warn("ts: Emit skipped!")
    }
    for(const diagnostic of result.getDiagnostics()) {
        console.warn(diagnostic.getMessageText())
    }
}

// To make yarn treat the out/ dir as a totally separate project it needs an (empty) yarn.lock
const createYarnLock = (outDir: string) => {
    fs.writeFileSync(path.resolve(outDir, `yarn.lock`), '')
}

type CreateClientOpts = {
    openapiSpecFilePath: string;
    packageJsonData: RequiredPackageJsonData;
    outDir: string;
    clientClassName: string;
}

const createClient = async (opts: CreateClientOpts) => {
    removeOutDir(opts.outDir)
    // Generate typescript from given openapi spec
    await generate({
        input: opts.openapiSpecFilePath,
        useUnionTypes: true,
        exportSchemas: true,
        clientName: opts.clientClassName,
        output: path.resolve(opts.outDir, "src")
    })
    //We can allow user provided custom tsconfig files in the future. For now, we just use a hardcoded default.
    // Copy tsconfig.out.json to out dir. Required so that the relative paths in it is correct when compiling
    const tsconfigFilePath = path.resolve(opts.outDir, 'tsconfig.out.json')
    await copyFile('./tsconfig.out.json', tsconfigFilePath)
    // Compile generated typescript
    await compile(tsconfigFilePath)
    createOutPackageJson(opts.outDir, opts.packageJsonData)
    createYarnLock(opts.outDir)
}

const readPackageJsonData = (packageJsonPath: string): RequiredPackageJsonData => {
    const fileContent = fs.readFileSync(packageJsonPath, {encoding: "utf-8"})
    const json = JSON.parse(fileContent)
    const name = json['name']
    const version = json['version']
    if(
        typeof name === "string" && name.trim().length > 0 &&
        typeof version === "string" && version.trim().length > 0
    ) {
        const data: RequiredPackageJsonData = {
            ...json
        }
        return data
    }
    throw new Error(`input package.json must contain non empty name and version property of type string`)
}



type CliArgs = {
    openapiSpecFilePath: string;
    packageJsonArgs: {
        file: string;
        name?: never;
        version?: never;
    } | RequiredPackageJsonData;
    outDir: string;
    clientClassName: string;
}

const resolveCliArgs = (): CliArgs => {
    const args: CliArgs = {
        openapiSpecFilePath: "in/openapi.json",
        packageJsonArgs: {
            file: "in/package.json"
        },
        outDir: "out/",
        clientClassName: "Client"
    }
    const requiredPackageJsonData: RequiredPackageJsonData = {name: "", version: ""}

    // Helper to get the argument value following a named argument specification
    const getNextArgVal = (currentIdx: number) => {
        const nextVal = process.argv[currentIdx + 1]
        if (nextVal !== undefined && nextVal.trim().length > 0) {
            return nextVal
        } else {
            throw new Error(`Named argument ${process.argv[currentIdx]} must be followed by non empty value string`)
        }
    }

    for(let idx = 2; idx < process.argv.length; idx++) {
        const arg = process.argv[idx]
        switch (arg) {
            case "--openapi-spec-file":
                args.openapiSpecFilePath = getNextArgVal(idx)
                break;
            case "--package-json-file":
                args.packageJsonArgs = {file: getNextArgVal(idx)}
                break;
            case "--package-json-name":
                requiredPackageJsonData.name = getNextArgVal(idx)
                break;
            case "--package-json-version":
                requiredPackageJsonData.version = getNextArgVal(idx)
                break;
            case "--out-dir":
                args.outDir = getNextArgVal(idx)
                break;
            case "--client-name":
                args.clientClassName = getNextArgVal(idx)
                break;
        }
    }
    if(requiredPackageJsonData.name.length > 0 !== requiredPackageJsonData.version.length > 0) {
        throw new Error(`both --package-json-name and --package-json-version must be set if one of them is`)
    }
    if(requiredPackageJsonData.name.length > 0 && requiredPackageJsonData.version.length > 0) {
        args.packageJsonArgs = requiredPackageJsonData
    }
    return args
}

const main = async () => {
    // Read in command line arguments
    const {openapiSpecFilePath, packageJsonArgs, outDir, clientClassName} = resolveCliArgs()
    const packageJsonData = packageJsonArgs.file !== undefined ? readPackageJsonData(packageJsonArgs.file) : packageJsonArgs
    await createClient({
        openapiSpecFilePath,
        packageJsonData,
        outDir,
        clientClassName,
    })
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})