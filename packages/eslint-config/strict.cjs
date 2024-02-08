// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require("./defaults.cjs");

config.extends.push(
	"plugin:@typescript-eslint/recommended-type-checked",
	"plugin:@typescript-eslint/strict-type-checked",
	"plugin:@typescript-eslint/stylistic-type-checked",
);

config.overrides = [
	{
		extends: ["plugin:@typescript-eslint/disable-type-checked"],
		files: ["./**/*.{cjs,js,jsx}"],
	},
],

module.exports = config;
