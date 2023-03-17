module.exports = {
	extends: ["plugin:vue/vue3-recommended", require.resolve("./defaults")],
	env: {
		browser: true,
	},
	parser: "vue-eslint-parser",
	parserOptions: {
		parser: "@typescript-eslint/parser",
		ecmaVersion: 2022,
		project: "./tsconfig.json",
		extraFileExtensions: [".vue"],
	},
	rules: {
		"vue/multi-word-component-names": "off",
		"no-undef": "off"
	},
	plugins: ["vue"],
};
