import {normalizePackageJsonVersion} from "../src/shared.js"

const assertStrEqual = (a: string, b: string): void => {
    if(a !== b) {
        throw new Error(`String ${a} !== ${b}`)
    }
}

const testNormalizePackageJsonVersion = () => {
    const testcases: {readonly inp: string; readonly expect: string}[] = [
        {inp: "1.2.3", expect: "1.2.3"},
        {inp: "1.2.20240504123456", expect: "1.2.20240504123456"},
        {inp: "1.2.2024.05.04.123456", expect: "1.2.20240504123456"},
        {inp: "1.2.2024.05.04.123456-b2cf419", expect: "1.2.20240504123456-b2cf419"},
    ]

    for(const testcase of testcases) {
        const result = normalizePackageJsonVersion(testcase.inp)
        assertStrEqual(result, testcase.expect)
    }
}

export const sharedTests = () => {
    testNormalizePackageJsonVersion()
}