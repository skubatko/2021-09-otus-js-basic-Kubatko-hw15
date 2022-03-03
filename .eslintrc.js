module.exports = {
  env: {
    browser: true,
    es2021: true,
    "jest/globals": true,
  },
  extends: ["airbnb-base", "prettier"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "import/prefer-default-export": "off",
    "max-len": ["error", { code: 125, ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-use-before-define": ["error", { functions: false }],
    "no-param-reassign": ["error", { props: false }],
    "one-var": [2, { uninitialized: "always" }],
    "no-shadow": ["error", { allow: ["items", "el"] }],
  },
  plugins: ["jest"],
};
