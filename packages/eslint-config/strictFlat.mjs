import tseslint from "typescript-eslint";

import base from "./defaultsFlat.mjs";

export default [
	...base,
	...tseslint.configs.strictTypeChecked,
	...tseslint.configs.stylisticTypeChecked,
	{
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: true,
			},
		},
	},
	{
		// disable type-aware linting on JS files
		files: ["**/*.{cjs,js,jsx}"],
		...tseslint.configs.disableTypeChecked,
	},
];
