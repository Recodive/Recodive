module.exports = {
	parserPreset: {
		parserOpts: { headerPattern: /^(\w*)(?:\((.*)\))?!?: ((.|\n|\r|\t)*)$/ },
	},
	rules: {
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [2, "always"],
		"header-max-length": [2, "always", 72],
		"type-case": [2, "always", "lower-case"],
		"type-enum": [2, "always", ["build", "ci", "cd", "docs", "feat", "fix", "perf", "refactor", "style", "test", "chore", "wip", "revert"]],
		"type-empty": [2, "never"],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-full-stop": [2, "never", "."],
		"subject-empty": [2, "never"],
	},
};
