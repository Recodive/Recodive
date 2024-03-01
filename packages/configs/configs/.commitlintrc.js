/* eslint-disable unicorn/prefer-module */
module.exports = {
	parserPreset: {
		// eslint-disable-next-line redos/no-vulnerable
		parserOpts: { headerPattern: /^(\w*)(?:\((.*)\))?!?: ((.|\n|\r|\t)*)$/ },
	},
	rules: {
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [2, "always"],
		"header-max-length": [2, "always", 72],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-empty": [2, "never"],
		"subject-full-stop": [2, "never", "."],
		"type-case": [2, "always", "lower-case"],
		"type-empty": [2, "never"],
		"type-enum": [2, "always", ["build", "ci", "cd", "docs", "feat", "fix", "perf", "refactor", "style", "test", "chore", "wip", "revert"]],
	},
};
