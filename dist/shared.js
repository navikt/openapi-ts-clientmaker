import fs from 'node:fs';
import path from 'node:path';
import { createClient as generate, defineConfig } from '@hey-api/openapi-ts';
import { Project } from 'ts-morph';
import { copyFile } from "node:fs/promises";
import { fileURLToPath } from "url";
export const getScriptDirPath = () => {
    const scriptFilePath = fileURLToPath(import.meta.url);
    return path.dirname(scriptFilePath);
};
const prepareOutDir = (outDirPath) => {
    const resolvedDir = path.resolve(outDirPath);
    const cwd = path.resolve();
    if (resolvedDir === "/") {
        throw new Error(`deleting root dir is not allowed`);
    }
    if (!resolvedDir.startsWith(cwd)) {
        throw new Error(`deleting dir outside of working dir is not allowed. out dir must be within working dir`);
    }
    // Create directory if it doesn't exist
    fs.mkdirSync(resolvedDir, { recursive: true });
    // Delete all files and directories found in given outDirPath, without removing outDirPath itself.
    fs.readdirSync(resolvedDir).forEach(entry => {
        const toDelete = path.resolve(resolvedDir, entry);
        fs.rmSync(toDelete, { recursive: true, force: true });
    });
};
const basePackageJson = {
    "type": "module",
    "module": "./esm/index.js",
    "exports": {
        ".": {
            "import": "./esm/index.js"
        },
        "./core/*": {
            "import": "./esm/core/*"
        }
    },
    "_generatedBy": "@navikt/openapi-ts-clientmaker"
};
const createOutPackageJson = (outDir, inputPackageJson) => {
    // Merge input package json (specifying at least name and version) with the hardcoded base
    const packageJson = {
        ...inputPackageJson,
        ...basePackageJson
    };
    // write it to out/
    fs.writeFileSync(path.resolve(outDir, `package.json`), JSON.stringify(packageJson, undefined, 2));
};
const compile = async (tsConfigFilePath) => {
    const project = new Project({
        tsConfigFilePath,
    });
    let errorDetected = false;
    for (const diagnostic of project.getPreEmitDiagnostics()) {
        errorDetected = true;
        console.info(`ts: ${diagnostic.getSourceFile()?.getFilePath()}, line ${diagnostic.getLineNumber()}:`, diagnostic.getMessageText());
    }
    const result = await project.emit();
    if (result.getEmitSkipped()) {
        errorDetected = true;
        console.warn("ts: Emit skipped!");
    }
    for (const diagnostic of result.getDiagnostics()) {
        errorDetected = true;
        console.warn(diagnostic.getMessageText());
    }
    if (errorDetected) {
        throw new Error(`Typescript compilation of generated client failed. Check console output for details.`);
    }
};
// To make yarn treat the out/ dir as a totally separate project it needs an (empty) yarn.lock
const createYarnLock = (outDir) => {
    fs.writeFileSync(path.resolve(outDir, `yarn.lock`), '');
};
export const createClient = async (opts) => {
    prepareOutDir(opts.outDir);
    // Generate typescript from given openapi spec
    const generateOpts = defineConfig({
        input: opts.openapiSpecFilePath,
        name: opts.clientClassName,
        output: path.resolve(opts.outDir, "src"),
        useOptions: false,
        plugins: [
            {
                name: '@hey-api/types',
                enums: "javascript"
            },
            {
                name: '@hey-api/schemas',
                // Reduce bundle size by not outputting descriptions:
                type: 'form',
                // Keep legacy naming of generated schemas file: ($ prefix instead of Schema suffix)
                nameBuilder: (name) => `$${name}`,
            },
            '@hey-api/services',
        ],
        client: "legacy/fetch"
    });
    await generate(generateOpts);
    //We can allow user provided custom tsconfig files in the future. For now, we just use a hardcoded default.
    // Copy tsconfig.out.json to out dir. Required so that the relative paths in it is correct when compiling
    const tsconfigFilePath = path.resolve(opts.outDir, 'tsconfig.out.json');
    await copyFile(path.resolve(getScriptDirPath(), 'tsconfig.out.json'), tsconfigFilePath);
    createOutPackageJson(opts.outDir, opts.packageJsonData);
    // Compile generated typescript
    await compile(tsconfigFilePath);
    createYarnLock(opts.outDir);
};
export const undefinedIfEmpty = (str) => str.trim().length === 0 ? undefined : str;
export const readPackageJsonData = (packageJsonPath) => {
    const fileContent = fs.readFileSync(packageJsonPath, { encoding: "utf-8" });
    const json = JSON.parse(fileContent);
    const name = json['name'];
    const version = json['version'];
    if (typeof name === "string" && name.trim().length > 0 &&
        typeof version === "string" && version.trim().length > 0) {
        const data = {
            ...json
        };
        return data;
    }
    throw new Error(`input package.json must contain non empty name and version property of type string`);
};
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
export const normalizePackageJsonVersion = (packageJsonVersion, removePreRelaseTag) => {
    let [major, minor, ...rest] = packageJsonVersion.split(".");
    if (undefinedIfEmpty(major ?? '') === undefined) {
        major = "0";
    }
    if (undefinedIfEmpty(minor ?? '') === undefined) {
        minor = "0";
    }
    let patch = "";
    if (rest.length > 0) {
        patch = rest.join("");
        if (removePreRelaseTag) {
            // Remove any pre-release tag
            const dashPos = patch.indexOf("-");
            if (dashPos > -1) {
                patch = patch.substring(0, dashPos);
            }
        }
    }
    if (undefinedIfEmpty(patch) === undefined) {
        patch = "0";
    }
    return `${major}.${minor}.${patch}`;
};
export const resolveRequiredPackageJsonData = (packageJsonFile, packageJsonName, packageJsonVersion) => {
    const fileData = packageJsonFile !== undefined ? readPackageJsonData(packageJsonFile) : undefined;
    const argData = {
        name: packageJsonName,
        version: packageJsonVersion !== undefined ? normalizePackageJsonVersion(packageJsonVersion, true) : undefined,
    };
    if (fileData !== undefined) {
        return {
            ...fileData,
            name: argData.name || fileData.name,
            version: argData.version || fileData.version
        };
    }
    else if (argData.name !== undefined && argData.version !== undefined) {
        return {
            name: argData.name,
            version: argData.version,
        };
    }
    else {
        throw new Error("incorrect specifiation of --package-json-* arguments");
    }
};
export const getDefaultParameterValues = () => ({
    openapiSpecFilePath: "in/openapi.json",
    packageJsonFile: "in/package.json",
    packageJsonName: undefined,
    packageJsonVersion: undefined,
    outDir: "out/",
    clientClassName: "Client",
});
export const resolveCliArgs = () => {
    let { openapiSpecFilePath, packageJsonFile, packageJsonName, packageJsonVersion, outDir, clientClassName, } = getDefaultParameterValues();
    // Helper to get the argument value following a named argument specification
    const getNextArgVal = (currentIdx) => {
        const nextVal = process.argv[currentIdx + 1];
        if (nextVal !== undefined && nextVal.trim().length > 0) {
            return nextVal;
        }
        else {
            throw new Error(`Named argument ${process.argv[currentIdx]} must be followed by non empty value string`);
        }
    };
    for (let idx = 2; idx < process.argv.length; idx++) {
        const arg = process.argv[idx];
        switch (arg) {
            case "--openapi-spec-file":
                openapiSpecFilePath = getNextArgVal(idx);
                break;
            case "--package-json-file":
                packageJsonFile = undefinedIfEmpty(getNextArgVal(idx));
                break;
            case "--package-json-name":
                packageJsonName = getNextArgVal(idx);
                break;
            case "--package-json-version":
                packageJsonVersion = getNextArgVal(idx);
                break;
            case "--out-dir":
                outDir = getNextArgVal(idx);
                break;
            case "--client-name":
                clientClassName = getNextArgVal(idx);
                break;
        }
    }
    const packageJsonData = resolveRequiredPackageJsonData(packageJsonFile, packageJsonName, packageJsonVersion);
    return {
        openapiSpecFilePath,
        packageJsonData,
        outDir,
        clientClassName,
    };
};
//# sourceMappingURL=shared.js.map