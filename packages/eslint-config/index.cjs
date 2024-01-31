//eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("./defaults.cjs");

config.extends.push("plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/strict", "plugin:@typescript-eslint/stylistic");

module.exports = config;
