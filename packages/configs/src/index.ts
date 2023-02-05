//@ts-expect-error - No types
import commitlint from "../configs/.commitlintrc.js";
//@ts-expect-error - No types
import lintstaged from "../configs/.lintstagedrc.js";
//@ts-expect-error - No types
import prettier from "../configs/.prettierrc.js";
//@ts-expect-error - No types
import commitlintJira from "../configs/jira.commitlintrc.js";

export default {
	commitlint,
	commitlintJira,
	lintstaged,
	prettier,
};
