# @recodive/configs

This package contains a set of configurations for our Recodive projects.

## Configs

`.vscode/settings.json` - [VSCode](https://code.visualstudio.com/) settings file.

`.vscode/extensions.json` - [VSCode](https://code.visualstudio.com/) extensions file.

`.editorconfig` - [EditorConfig](https://editorconfig.org/) configuration file.

`.gitattributes` - [Git](https://git-scm.com/) attributes file.

`.npmrc` - [npm](https://www.npmjs.com/) configuration file.

`.prettierrc` - [Prettier](https://prettier.io/) configuration file.

## Husky
Husky is a tool that allows you to run scripts at certain points in git's execution. It is used to run linting and testing before commits and pushes.

`.husky` - [Husky](https://typicode.github.io/husky/#/) configuration file.
> You need to add the following scripts to your `package.json` file:
`"prepare": "npx husky install"`

Commitlint is used to lint commit messages. This is run on the `commit-msg` hook.
`.commitlintrc` - [Commitlint](https://commitlint.js.org/#/) configuration file.

Lint-staged is used to run linting on staged files. This is run on the `pre-commit` hook.
`.lintstagedrc` - [lint-staged](https://github.com/okonet/lint-staged) configuration file.
