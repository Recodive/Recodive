// eslint-disable-next-line @typescript-eslint/no-var-requires
const base = require("./vue.base.cjs");

base.extends.push(
	require.resolve("./defaults.cjs"),
	"plugin:@typescript-eslint/recommended-type-checked",
	"plugin:@typescript-eslint/strict-type-checked",
	"plugin:@typescript-eslint/stylistic-type-checked"
);

module.exports = base;
