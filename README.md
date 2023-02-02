# Recodive [![CI](https://github.com/Recodive/Configs/actions/workflows/CI.yml/badge.svg)](https://github.com/Recodive/Configs/actions/workflows/CI.yml)

| Statements                  | Branches                | Functions                 | Lines             |
| --------------------------- | ----------------------- | ------------------------- | ----------------- |
| ![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat&logo=vitest) | ![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat&logo=vitest) | ![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat&logo=vitest) | ![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat&logo=vitest) |

This is the monorepo for the Recodive project. It contains the following packages:

- [@recodive/eslint-config](./eslint-config/README.md)
- [@recodive/configs](./configs/README.md)

## Usage
The listed packages are published on the github package registry & NPM registry. To use them, you need to add the following to your `.npmrc` file:

```ini
@recodive:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=TOKEN
//npm.pkg.github.com/:always-auth=true
```

```bash
# Install the packages you need
pnpm add @recodive/configs
```
