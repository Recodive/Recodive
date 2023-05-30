module.exports = {
	extends: ["plugin:vue/vue3-recommended", require.resolve("./defaults.cjs")],
	env: {
		browser: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		tsconfigRootDir: __dirname,
	},
	rules: {
		"vue/multi-word-component-names": "off",
		"no-undef": "off",
	},
	plugins: ["vue"],
};
