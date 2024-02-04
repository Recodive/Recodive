module.exports = {
	env: {
		browser: true,
	},
	extends: ["plugin:vue/vue3-recommended", "plugin:@typescript-eslint/recommended", "plugin:@typescript-eslint/strict", "plugin:@typescript-eslint/stylistic"],
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
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
