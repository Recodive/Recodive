import stylistic from "@stylistic/eslint-plugin";
import redosEslint from "eslint-plugin-redos";
import simpleImportSortEslint from "eslint-plugin-simple-import-sort";
import sortKeysFixEslint from "eslint-plugin-sort-keys-fix";
import eslintPluginUnicorn from "eslint-plugin-unicorn";
import unusedImportsEslint from "eslint-plugin-unused-imports";
import tseslint from "typescript-eslint";

export default [
	{
		ignores: ["**/lib/**", "**/dist/**", "**/node_modules/**", "**/coverage/**", "**/.vitepress/**", "**/generated/**"],
	},
	stylistic.configs.customize({
		braceStyle: "1tbs",
		indent: "tab",
		quoteProps: "as-needed",
		quotes: "double",
		semi: true,
	}),
	eslintPluginUnicorn.configs["flat/recommended"],
	{
		plugins: {
			"@typescript-eslint": tseslint.plugin,
			redos: redosEslint,
			"simple-import-sort": simpleImportSortEslint,
			"sort-keys-fix": sortKeysFixEslint,
			"unused-imports": unusedImportsEslint,
		},
		rules: {
			"@stylistic/quotes": ["error", "double", { avoidEscape: true }],
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
			//* Eslint doesn't quite know what the status with this rule is, docs say disabled in recommended but apparently not...
			"no-mixed-spaces-and-tabs": "off",
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
		},
	},
	stylistic.configs["disable-legacy"],
];
