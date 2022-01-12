# @syltek/eslint-config-glamping-react-ts
This package provides Playtomic's base JS .eslintrc with Typescript support and React plugins as an extensible shared config.

## Setup

### 1) Install package

```bash
npm install @syltek/eslint-config-glamping-react-ts --save-dev
```

### 2) Install peer dependencies

```bash
npm install eslint@^8.4.1 \
            @typescript-eslint/eslint-plugin@^5.7.0 \
            @typescript-eslint/parser@^5.7.0 \
            eslint-plugin-import@^2.25.3 \
            eslint-plugin-jsx-a11y@^6.5.1, \
            eslint-plugin-react@^7.27.1, \
            eslint-plugin-react-hooks@^4.3.0 \
            --save-dev
```

if using npm 5+, you can use this shortcut:

```bash
npx install-peerdeps --dev @syltek/eslint-config-glamping-react-ts
```
> If using yarn, you can also use the shortcut described above if you have npm 5+ installed on your machine, as the command will detect that you are using yarn and will act accordingly. 

### 3) Configure ESLint

Extend `@syltek/eslint-config-glamping-react-ts` in the ESLint config file of your project.

```js
// .eslintrc.js

module.exports = {
  extends: ['@syltek/eslint-config-glamping-react-ts']
}
```

Note that it does not enable any React Hooks rules. To enable those rules, extend `@syltek/eslint-config-glamping-react-ts/hooks` as well.

```js
// .eslintrc.js

module.exports = {
  extends: ['@syltek/eslint-config-glamping-react-ts', '@syltek/eslint-config-glamping-react-ts/hooks']
}
```

### 4) Configure the ESLint TypeScript parser

This config requires knowledge of your TypeScript config. In your ESLint config, set [parserOptions.project](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/parser#parseroptionsproject) to the path of your `tsconfig.json`.

For example:

```js
// .eslintrc.js

module.exports = {
  extends: ['@syltek/eslint-config-glamping-react-ts'],
  parserOptions: {
    project: ["./tsconfig.json"]
  }
}
```

## Usage

Open a terminal to the root of your project and run `eslint` against the desired file extensions and path:
```bash
npx eslint . --ext .js,.jsx
```

Setup your own scripts in `package.json`
```json
    scripts:{
        "lint": "eslint src/ --ext .js  --cache --cache-strategy content",
        "lint:fix": "eslint src/ --fix --ext .js,.jsx,.ts,tsx  --cache --cache-strategy content",
    }
```

If you are using vscode, you can setup the [ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) and with the following settings have ESLint automatically lint fix your files on save.

```json
{
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": true
      },
      "eslint.probe": ["javascript", "javascriptreact", "typescript", "typescriptreact"]
}
```
