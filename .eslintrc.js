module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: [
    "airbnb-base",
    "plugin:jest/recommended",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "import/no-unresolved": "off", // https://github.com/typescript-eslint/typescript-eslint/issues/1624
    "import/extensions": ["warn", "never"], // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/extensions.md
    "max-len": ["error", { code: 125, ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-use-before-define": ["error", { functions: false }],
    "no-param-reassign": ["error", { props: false }],
    "one-var": [2, { uninitialized: "always" }],
    "no-shadow": ["error", { allow: ["items", "el"] }],
    "default-param-last": ["off"],
    "class-methods-use-this": ["off"],
  },
};
