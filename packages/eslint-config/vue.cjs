module.exports = {
	env: {
		browser: true,
	},
	extends: ["plugin:vue/vue3-recommended", require.resolve("./defaults.cjs")],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		tsconfigRootDir: __dirname,
	},
	plugins: ["vue"],
	rules: {
		"no-undef": "off",
		"vue/component-tags-order": [
			"error",
			{
				order: ["script", "template", "style"],
			},
		],
		"vue/multi-word-component-names": "off",
	},
};
