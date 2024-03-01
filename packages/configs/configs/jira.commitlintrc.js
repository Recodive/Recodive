/* eslint-disable unicorn/prefer-module */
/* eslint-disable redos/no-vulnerable */
module.exports = {
	parserPreset: {
		parserOpts: { headerPattern: /^(\w*)(?:\((.*)\))?!?: ((.|\n|\r|\t)*)$/ },
	},
	plugins: ["commitlint-plugin-function-rules"],
	rules: {
		"body-leading-blank": [2, "always"],
		"footer-leading-blank": [2, "always"],
		"function-rules/scope-enum": [
			2,
			"always",
			(parsed) => {
				if (parsed.scope && parsed.scope.toUpperCase() !== parsed.scope) {
					if (!parsed.raw?.startsWith("revert")) return [false, "scope must be upper-case"];
					else if (parsed.raw?.match(/^revert\(([A-Z]+-\d+)( & ([A-Z]+-\d+))*\)!?: (\w*)\(([A-Z]+-\d+)( & ([A-Z]+-\d+))*\)!?: ((.|\n|\r|\t)*)$/)) return [true];
					else return [false, "scope must be upper-case"];
				}
				if (parsed.scope?.match(/[A-Z]+-\d+( & ([A-Z]+-\d+))*/))
					return parsed.type === "revert" ? [false, "revert commits should have the full commit name that is being reverted"] : [true];

				if (parsed.raw?.match(/^(\w*)(?:\(([A-Z]+-\d+)( & ([A-Z]+-\d+))*\))?!?: ((.|\n|\r|\t)*)$/))
					return parsed.type === "revert" ? [false, "revert commits should have the associated JIRA ID includes in the revert scope"] : [true];

				if (!parsed.subject) return [false, "a subject must be set"];

				return [false, "scope must be a JIRA issue ID"];
			},
		],
		"header-max-length": [2, "always", 72],
		"subject-case": [2, "never", ["sentence-case", "start-case", "pascal-case", "upper-case"]],
		"subject-full-stop": [2, "never", "."],
		"type-case": [2, "always", "lower-case"],
		"type-enum": [2, "always", ["build", "ci", "cd", "docs", "feat", "fix", "perf", "refactor", "style", "test", "chore", "wip", "revert"]],
	},
};
