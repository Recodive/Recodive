//* Patches eslint's module resolution
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = require("./packages/eslint-config")
