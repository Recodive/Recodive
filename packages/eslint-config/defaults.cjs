// eslint-disable-next-line unicorn/prefer-module
module.exports = {
	env: {
		node: true,
	},
	extends: [
		"eslint:recommended",
		"plugin:unicorn/recommended",
		"plugin:@typescript-eslint/eslint-recommended",
		"plugin:@typescript-eslint/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint", "unicorn", "simple-import-sort", "unused-imports", "sort-keys-fix"],
	root: true,
	rules: {
		"@typescript-eslint/array-type": ["error", { default: "array" }],
		"@typescript-eslint/no-explicit-any": "error",
		"@typescript-eslint/no-unused-vars": "off",
		"arrow-body-style": "off",
		"brace-style": "error",
		camelcase: ["error", { ignoreDestructuring: true, properties: "never" }],
		curly: ["error", "multi-or-nest"],
		"dot-notation": "error",
		eqeqeq: ["error", "always", { null: "ignore" }],
		"func-call-spacing": ["error", "never"],
		"key-spacing": ["error", { beforeColon: false }],
		"linebreak-style": ["error", "unix"],
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
		"quote-props": ["error", "as-needed"],
		quotes: ["error", "double", { avoidEscape: true }],
		radix: "off",
		semi: ["error", "always", { omitLastInOneLineBlock: true }],
		"simple-import-sort/exports": "error",
		"simple-import-sort/imports": "error",
		"sort-keys-fix/sort-keys-fix": "error",
		"space-before-blocks": ["error", "always"],
		"space-infix-ops": "error",
		"template-curly-spacing": "error",
		"unicorn/filename-case": ["error", { cases: { camelCase: true, pascalCase: true } }],
		"unicorn/no-unused-properties": "error",
		"unicorn/prefer-at": "error",
		"unicorn/prefer-string-replace-all": "error",
		"unicorn/switch-case-braces": ["error", "avoid"],
		//* Fixes gql template indentation with prettier fighting eslint
		"unicorn/template-indent": [
			"error",
			{
				indent: "\t",
			},
		],
		"unused-imports/no-unused-imports": "error",
		"unused-imports/no-unused-vars": ["warn", { args: "after-used", argsIgnorePattern: "^_", vars: "all", varsIgnorePattern: "^_" }],
	},
};
