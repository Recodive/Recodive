import tseslint from "typescript-eslint";

import base from "./defaultsFlat.mjs";

export default [...base, ...tseslint.configs.strict, ...tseslint.configs.stylistic];
