import * as fs from 'node:fs'
import * as path from 'node:path'
import { generate } from '@nicolas-chaulet/openapi-typescript-codegen';
import { Project } from 'ts-morph';

const removeOutDir = (outDirPath: string) => {
    const resolvedDir = path.resolve(outDirPath)
    const cwd = path.resolve()
    if(resolvedDir === "/") {
        throw new Error(`deleting root dir is not allowed`)
    }
    if(!resolvedDir.startsWith(cwd)) {
        throw new Error(`deleting dir outside of working dir is not allowed. out dir must be within working dir`)
    }
    fs.rmSync(resolvedDir, {recursive: true, force: true})
}

type RequiredPackageJsonData = {
    name: string;
    version: string;
}

const basePackageJson = {
    "type": "module",
    "module": "./esm/index.js",
    "exports": {
        ".": {
            "import": "./esm/index.js"
        }
    },
    "_generatedBy": "@navikt/openapi-ts-clientorator"
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
    // Compile generated typescript
    await compile(`src/tsconfig.out.json`) // <- We can allow user provided custom tsconfig files in the future.
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


const main = async () => {
    const packageJsonData = readPackageJsonData("in/package.json")
    await createClient({
        openapiSpecFilePath: `./in/openapi.json`,
        packageJsonData,
        outDir: `./out/`,
        clientClassName: "K9SakClient"
    })
}

main().catch(e => {
    console.error(e)
    process.exit(1)
})