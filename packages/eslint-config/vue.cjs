//eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("./vue.base.cjs");

base.extends.push(require.resolve("./index.cjs"));

module.exports = base;
