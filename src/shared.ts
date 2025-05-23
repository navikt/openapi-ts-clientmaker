import fs from 'node:fs'
import path from 'node:path'
import {createClient as generate, defineConfig} from '@hey-api/openapi-ts';
import { Project } from 'ts-morph';
import { copyFile, cp } from "node:fs/promises";
import { fileURLToPath } from "url";
import {sanitizeTag} from "./methodNameBuilder/sanitizeTag.js";

export const getScriptDirPath = () => {
    const scriptFilePath = fileURLToPath(import.meta.url)
    return path.dirname(scriptFilePath)
}

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
    "dependencies": {
        "@hey-api/client-fetch": "=0.10.0",
    },
    "exports": {
        "./client": {
            "import": "./esm/client.gen.js"
        },
        "./types": {
            "import": "./esm/types.gen.js"
        },
        "./sdk": {
            "import": "./esm/sdk.gen.js"
        },
        "./schemas": {
            "import": "./esm/schemas.gen.js"
        },
        "./package.json": {
            "import": "./package.json"
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
    let errorDetected = false
    for(const diagnostic of project.getPreEmitDiagnostics()) {
        errorDetected = true
        console.info(`ts: ${diagnostic.getSourceFile()?.getFilePath()}, line ${diagnostic.getLineNumber()}:`, diagnostic.getMessageText())
    }
    const result = await project.emit()
    if(result.getEmitSkipped()) {
        errorDetected = true
        console.warn("ts: Emit skipped!")
    }
    for(const diagnostic of result.getDiagnostics()) {
        errorDetected = true
        console.warn(diagnostic.getMessageText())
    }
    if(errorDetected) {
        throw new Error(`Typescript compilation of generated client failed. Check console output for details.`)
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
}


export const createClient = async (opts: CreateClientOpts) => {
    prepareOutDir(opts.outDir)
    // Generate typescript from given openapi spec
    const generateOpts = () => defineConfig({
        input: opts.openapiSpecFilePath,
        output: {
            path: path.resolve(opts.outDir, "src"),
            indexFile: false,
        },
        plugins: [
            {
                name: '@hey-api/client-fetch',
                throwOnError: true,
                baseUrl: false,
            },
            {
                name: '@hey-api/typescript',
                enums: "javascript",
                exportInlineEnums: true,
                readOnlyWriteOnlyBehavior: "off",
            },
            {
                name: '@hey-api/schemas',
                // Reduce bundle size by not outputting descriptions:
                type: 'form',
                // Keep legacy naming of generated schemas file: ($ prefix instead of Schema suffix)
                nameBuilder: (name: string) => `$${name}`,
            },
            {
                name: '@hey-api/sdk',
                // Enable this if transformers plugin is enabled: transformer: true,
                asClass: false,
                // We generate "flat sdk" containing all operations, but prefix the function names with the operation tag.
                // This gives us tree-shaking while also preserving some of the structure we used to have when generating
                // class based sdk.
                methodNameBuilder: (operation: any) => {
                    // Remove/replace all characters that are illegal in a typescript identifier:
                    const safeTags = "tags" in operation && operation.tags !== undefined ? operation.tags.map(sanitizeTag) : undefined
                    // If there are more than one tag, create prefix by joining them with _
                    const tagsPrefix = safeTags?.join("_")
                    if(tagsPrefix !== undefined) {
                        return `${tagsPrefix}_${operation.id}`
                    }
                    if(operation.id !== null) {
                        return operation.id
                    }
                    throw new Error(`methodNameBuilder: cannot create name when operation.id is null (${operation.path})`)
                }
            },
            /* Consider enabling this in a future (breaking) update:
            {
                name: '@hey-api/transformers',
                dates: true
            }
            */
        ],
    })
    await generate(generateOpts)
    //We can allow user provided custom tsconfig files in the future. For now, we just use a hardcoded default.
    // Copy tsconfig.out.json to out dir. Required so that the relative paths in it is correct when compiling
    const tsconfigFilePath = path.resolve(opts.outDir, 'tsconfig.out.json')
    await copyFile(path.resolve(getScriptDirPath(), 'tsconfig.out.json'), tsconfigFilePath)
    // Copy node_modules/@hey-api to out dir. Required for compilation of generated typescript.
    await cp(path.resolve(getScriptDirPath(), '../node_modules/@hey-api'), path.resolve(opts.outDir, './node_modules/@hey-api'), {recursive: true})
    createOutPackageJson(opts.outDir, opts.packageJsonData)
    // Compile generated typescript
    await compile(tsconfigFilePath)
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

/**
 * The generated npm package should always be of expected semantic versioning form. (<major>.<minor>.<patch>). This
 * function is used to normalize input version string to that.
 *
 * If there is more than three dots in the input, all dots after the third is removed.
 *
 * If there is less than three dots in the input, ".0" is added until there is three dots
 *
 * If removePreRelaseTag is true, and there is a dash (-) in the patch version input, it and everything after is removed,
 * so that it is not interpreted as a "pre-release" version by javascript package management.
 */
export const normalizePackageJsonVersion = (packageJsonVersion: string, removePreRelaseTag: boolean): string => {
    let [major, minor, ...rest] = packageJsonVersion.split(".")
    if(undefinedIfEmpty(major ?? '') === undefined) {
        major = "0"
    }
    if(undefinedIfEmpty(minor ?? '') === undefined) {
        minor = "0"
    }
    let patch = ""
    if(rest.length > 0) {
        patch = rest.join("")
        if(removePreRelaseTag) {
            // Remove any pre-release tag
            const dashPos = patch.indexOf("-")
            if(dashPos > -1) {
                patch = patch.substring(0, dashPos)
            }
        }
    }
    if(undefinedIfEmpty(patch) === undefined) {
        patch = "0"
    }
    return `${major}.${minor}.${patch}`
}

export const resolveRequiredPackageJsonData = (packageJsonFile: string | undefined, packageJsonName: string | undefined, packageJsonVersion: string | undefined): RequiredPackageJsonData => {
    const fileData = packageJsonFile !== undefined ? readPackageJsonData(packageJsonFile) : undefined
    const argData = {
        name: packageJsonName,
        version: packageJsonVersion !== undefined ? normalizePackageJsonVersion(packageJsonVersion, true) : undefined,
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
    outDir: string
} = () => ({
    openapiSpecFilePath : "in/openapi.json",
    packageJsonFile: "in/package.json",
    packageJsonName: undefined,
    packageJsonVersion: undefined,
    outDir: "out/",
})

export const resolveCliArgs = (): CreateClientOpts => {
    let {
        openapiSpecFilePath,
        packageJsonFile,
        packageJsonName,
        packageJsonVersion,
        outDir,
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
                console.info(`--client-name argument has no effect in version 2`)
                break;
        }
    }
    const packageJsonData = resolveRequiredPackageJsonData(packageJsonFile, packageJsonName, packageJsonVersion)
    return {
        openapiSpecFilePath,
        packageJsonData,
        outDir,
    }
}
