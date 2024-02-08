// eslint-disable-next-line @typescript-eslint/no-var-requires
const stylistic = require("@stylistic/eslint-plugin");

const customized = stylistic.configs.customize({
	braceStyle: "1tbs",
	indent: "tab",
	quoteProps: "as-needed",
	quotes: "double",
	semi: true,
});

// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	env: {
		node: true,
	},
	extends: ["eslint:recommended", "plugin:unicorn/recommended"],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "unicorn", "simple-import-sort", "unused-imports", "sort-keys-fix", "redos", "@stylistic"],
	root: true,
	rules: {
		"@typescript-eslint/array-type": ["error", { default: "array" }],
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-unused-vars": "off",
		"arrow-body-style": "off",
		camelcase: ["error", { ignoreDestructuring: true, properties: "never" }],
		curly: ["error", "multi-or-nest"],
		"dot-notation": "error",
		eqeqeq: ["error", "always", { null: "ignore" }],
		"no-case-declarations": "error",
		"no-console": "warn",
		"no-empty": ["error", { allowEmptyCatch: true }],
		"no-eq-null": "error",
		"no-eval": "warn",
		"no-lonely-if": "error",
		"no-multi-spaces": "error",
		"no-multiple-empty-lines": ["error", { max: 2, maxBOF: 0, maxEOF: 0 }],
		"no-var": "error",
		"object-shorthand": "error",
		"one-var": ["error", "consecutive"],
		"prefer-arrow-callback": "off",
		"prefer-const": "error",
		"prefer-destructuring": [
			"error",
			{
				array: false,
				object: true,
			},
		],
		"prefer-template": "error",
		radix: "off",
		"redos/no-vulnerable": "error",
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"sort-keys-fix/sort-keys-fix": "error",
		"space-before-blocks": ["error", "always"],
		"space-infix-ops": "error",
		"unicorn/filename-case": ["error", { cases: { camelCase: true, pascalCase: true } }],
		"unicorn/no-unused-properties": "error",
		"unicorn/prefer-at": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/switch-case-braces": ["error", "avoid"],
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": ["warn", { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }],
		...customized.rules,
		"@stylistic/quotes": ["error", "double", { avoidEscape: true }],
	},
};
