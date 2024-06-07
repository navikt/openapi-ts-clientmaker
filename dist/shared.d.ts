export declare const getScriptDirPath: () => string;
export type RequiredPackageJsonData = {
    name: string;
    version: string;
    file?: never;
};
export type CreateClientOpts = {
    openapiSpecFilePath: string;
    packageJsonData: RequiredPackageJsonData;
    outDir: string;
    clientClassName: string;
};
export declare const createClient: (opts: CreateClientOpts) => Promise<void>;
export declare const undefinedIfEmpty: (str: string) => string | undefined;
export declare const readPackageJsonData: (packageJsonPath: string) => RequiredPackageJsonData;
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
export declare const normalizePackageJsonVersion: (packageJsonVersion: string, removePreRelaseTag: boolean) => string;
export declare const resolveRequiredPackageJsonData: (packageJsonFile: string | undefined, packageJsonName: string | undefined, packageJsonVersion: string | undefined) => RequiredPackageJsonData;
export declare const getDefaultParameterValues: () => {
    packageJsonVersion: string | undefined;
    packageJsonName: string | undefined;
    openapiSpecFilePath: string;
    packageJsonFile: string | undefined;
    clientClassName: string;
    outDir: string;
};
export declare const resolveCliArgs: () => CreateClientOpts;
//# sourceMappingURL=shared.d.ts.map