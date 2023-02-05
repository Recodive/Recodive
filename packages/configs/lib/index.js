"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//@ts-expect-error - No types
const _commitlintrc_js_1 = __importDefault(require("../configs/.commitlintrc.js"));
//@ts-expect-error - No types
const _lintstagedrc_js_1 = __importDefault(require("../configs/.lintstagedrc.js"));
//@ts-expect-error - No types
const _prettierrc_js_1 = __importDefault(require("../configs/.prettierrc.js"));
//@ts-expect-error - No types
const jira_commitlintrc_js_1 = __importDefault(require("../configs/jira.commitlintrc.js"));
exports.default = {
    commitlint: _commitlintrc_js_1.default,
    commitlintJira: jira_commitlintrc_js_1.default,
    lintstaged: _lintstagedrc_js_1.default,
    prettier: _prettierrc_js_1.default,
};
