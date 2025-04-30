import {
    createClient,
    CreateClientOpts,
    getDefaultParameterValues,
    resolveRequiredPackageJsonData,
    undefinedIfEmpty
} from "./shared.js";
import * as core from '@actions/core'


const resolveActionInputs = (): CreateClientOpts => {
    let {
        openapiSpecFilePath,
        packageJsonFile,
        packageJsonName,
        packageJsonVersion,
        outDir,
    } = getDefaultParameterValues()

    openapiSpecFilePath = undefinedIfEmpty(core.getInput('openapi-spec-file')) || openapiSpecFilePath
    packageJsonFile = undefinedIfEmpty(core.getInput('package-json-file'))
    packageJsonName = undefinedIfEmpty(core.getInput('package-json-name'))
    packageJsonVersion = undefinedIfEmpty(core.getInput('package-json-version'))
    outDir = undefinedIfEmpty(core.getInput('out-dir')) || outDir

    const packageJsonData = resolveRequiredPackageJsonData(packageJsonFile, packageJsonName, packageJsonVersion)
    return {
        openapiSpecFilePath,
        packageJsonData,
        outDir,
    }
}

const main = async () => {
    // Read in action inputs
    const opts = resolveActionInputs()
    await createClient(opts)
}

main().catch(e => {
    core.setFailed(`openapi ts client generation failed: ${e}`)
})