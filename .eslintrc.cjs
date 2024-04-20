/** @type {import('eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "plugin:storybook/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: true,
    tsconfigRootDir: __dirname,
  },
  plugins: ["simple-import-sort", "unused-imports"],
  ignorePatterns: [".yarn/*", "dist/*", "tailwind.config.js"],
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    // increase the severity of rules so they are auto-fixable
    "simple-import-sort/imports": "error",
    "simple-import-sort/exports": "error",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_",
        args: "after-used",
        argsIgnorePattern: "^_",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      //https://github.com/orgs/react-hook-form/discussions/8622
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
};
