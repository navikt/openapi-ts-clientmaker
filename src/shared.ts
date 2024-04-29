import * as fs from 'node:fs'
import * as path from 'node:path'
import { generate } from '@nicolas-chaulet/openapi-typescript-codegen';
import { Project } from 'ts-morph';
import { copyFile } from "node:fs/promises";

const prepareOutDir = (outDirPath: string) => {
    const resolvedDir = path.resolve(outDirPath)
    const cwd = path.resolve()
    if(resolvedDir === "/") {
        throw new Error(`deleting root dir is not allowed`)
    }
    if(!resolvedDir.startsWith(cwd)) {
        throw new Error(`deleting dir outside of working dir is not allowed. out dir must be within working dir`)
    }
    // Create directory if it doesn't exist
    fs.mkdirSync(resolvedDir, {recursive: true})
    // Delete all files and directories found in given outDirPath, without removing outDirPath itself.
    fs.readdirSync(resolvedDir).forEach(entry => {
        const toDelete = path.resolve(resolvedDir, entry)
        fs.rmSync(toDelete, {recursive: true, force: true})
    })
}

export type RequiredPackageJsonData = {
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

export type CreateClientOpts = {
    openapiSpecFilePath: string;
    packageJsonData: RequiredPackageJsonData;
    outDir: string;
    clientClassName: string;
}

export const createClient = async (opts: CreateClientOpts) => {
    prepareOutDir(opts.outDir)
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

export const undefinedIfEmpty = (str: string): string | undefined => str.trim().length === 0 ? undefined : str

export const readPackageJsonData = (packageJsonPath: string): RequiredPackageJsonData => {
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


export const resolveRequiredPackageJsonData = (packageJsonFile: string | undefined, packageJsonName: string | undefined, packageJsonVersion: string | undefined): RequiredPackageJsonData => {
    const fileData = packageJsonFile !== undefined ? readPackageJsonData(packageJsonFile) : undefined
    const argData = {
        name: packageJsonName,
        version: packageJsonVersion
    }
    if(fileData !== undefined) {
        return {
            ...fileData,
            name: argData.name || fileData.name,
            version: argData.version || fileData.version
        }
    } else if(argData.name !== undefined && argData.version !== undefined) {
        return {
            name: argData.name,
            version: argData.version,
        }
    } else {
        throw new Error("incorrect specifiation of --package-json-* arguments")
    }
}

export const getDefaultParameterValues: () => {
    packageJsonVersion: string | undefined;
    packageJsonName: string | undefined;
    openapiSpecFilePath: string;
    packageJsonFile: string | undefined;
    clientClassName: string;
    outDir: string
} = () => ({
    openapiSpecFilePath : "in/openapi.json",
    packageJsonFile: "in/package.json",
    packageJsonName: undefined,
    packageJsonVersion: undefined,
    outDir: "out/",
    clientClassName: "Client",
})

export const resolveCliArgs = (): CreateClientOpts => {
    let {
        openapiSpecFilePath,
        packageJsonFile,
        packageJsonName,
        packageJsonVersion,
        outDir,
        clientClassName,
    } = getDefaultParameterValues()

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
                openapiSpecFilePath = getNextArgVal(idx)
                break;
            case "--package-json-file":
                packageJsonFile = undefinedIfEmpty(getNextArgVal(idx))
                break;
            case "--package-json-name":
                packageJsonName = getNextArgVal(idx)
                break;
            case "--package-json-version":
                packageJsonVersion = getNextArgVal(idx)
                break;
            case "--out-dir":
                outDir = getNextArgVal(idx)
                break;
            case "--client-name":
                clientClassName = getNextArgVal(idx)
                break;
        }
    }
    const packageJsonData = resolveRequiredPackageJsonData(packageJsonFile, packageJsonName, packageJsonVersion)
    return {
        openapiSpecFilePath,
        packageJsonData,
        outDir,
        clientClassName,
    }
}
