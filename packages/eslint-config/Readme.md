# @recodive/eslint-config

This package provides Recodive's .eslintrc as an extensible shared config.

## Installation
```Bash
npm install --save-dev eslint @rushstack/eslint-patch @recodive/eslint-config
```
> We use @rushstack/eslint-patch to patch ESLint's module resolution so that we don't have to install all of the plugins.

## Multiple configs
This package provides multiple configs for different projects. As of now, there are configs for:
- JavaScript/TypeScript projects (default)
- JavaScript/TypeScript projects with strict type checking (`@recodive/eslint-config/strict`)
- Vue projects (`@recodive/eslint-config/vue`)
- Vue projects strict (`@recodive/eslint-config/vue-strict`)

## Usage
Create a .eslintrc file in the root of your project with the following contents:
```JS
//* Patches eslint's module resolution
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
	extends: "@recodive/eslint-config",
};
```
