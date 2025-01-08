// Based on sanitizeOperationParameterName function in https://github.com/hey-api/openapi-ts/blob/main/packages/openapi-ts/src/openApi/common/parser/sanitize.ts
import { utils } from '@hey-api/openapi-ts';
export const sanitizeTag = (name) => utils.stringCase({
    case: "camelCase",
    value: name.replace('[]', '')
        .replace(/^[^\p{ID_Start}]+/u, '_')
        .replace(/[^$\u200c\u200d\p{ID_Continue}]/gu, '_')
        .replace(/\$/g, '')
});
//# sourceMappingURL=sanitizeTag.js.map