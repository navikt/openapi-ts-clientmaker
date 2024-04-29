import fs from 'node:fs';
import path from 'node:path';
import { getScriptDirPath } from "./shared.js";
// This file is used during build to copy tsconfig.out.json from src/ to dist/, so it's available when running the clientmaker.
const copyTsconfigToDist = () => {
    const scriptDirPath = getScriptDirPath();
    const fromPath = path.resolve(scriptDirPath, '../src/tsconfig.out.json');
    const toPath = path.resolve(scriptDirPath, 'tsconfig.out.json');
    fs.copyFileSync(fromPath, toPath);
};
copyTsconfigToDist();
//# sourceMappingURL=copyTsconfig.js.map