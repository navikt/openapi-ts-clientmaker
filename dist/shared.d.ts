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