module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-native/all",
    "prettier",
    "plugin:react-hooks/recommended",
  ],
  plugins: ["@typescript-eslint", "react", "react-native", "prettier", "react-hooks"],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "18.2.0",
    },
  },
  env: {
    jest: true,
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ["*.tsx"],
      rules: {
        "@typescript-eslint/explicit-function-return-type": "off",
      },
    },
  ],
  rules: {
    // Keep code formatting consistent using Prettier
    "prettier/prettier": "error",

    // Require explicit return types in public functions
    "@typescript-eslint/explicit-module-boundary-types": "warn",

    // Do not allow empty functions (no code) - [constructors allowed as an exception]
    "no-empty-function": [
      "error",
      {
        allow: ["constructors"],
      },
    ],

    // Do not allow inline styles in React Native components
    "react-native/no-inline-styles": "error",

    // Control the use of parentheses in arrow functions
    // "arrow-parens": ["warn", "as-needed"],

    "@typescript-eslint/no-var-requires": "off",

    "react-native/no-unused-styles": "off",

    // Control spacing around code blocks
    "block-spacing": ["warn", "always"],

    // Require {} around all 'if', 'else', 'for', 'while', etc. statements
    // curly: ["warn", "all"],

    // Trigger error when using eval
    "no-eval": "error",

    // Require explicit return types in functions
    "@typescript-eslint/explicit-function-return-type": ["error", { allowExpressions: true }],

    // Warn about unnecessary empty constructors in classes
    "@typescript-eslint/no-useless-constructor": "warn",

    // Do not allow the use of 'any' type
    "@typescript-eslint/no-explicit-any": "error",

    // Do not allow unused variables, except those with an underscore (_) prefix
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],

    // Warn about disabled TypeScript comments
    "@typescript-eslint/ban-ts-comment": "error",

    // Warn about the use of console.log
    "no-console": "warn",

    // Avoid non-shareable components between platforms in React Native
    "react-native/split-platform-components": "error",

    // Avoid color literals directly in code in React Native
    "react-native/no-color-literals": "error",

    // Do not allow duplicate imports
    "no-duplicate-imports": "error",

    // Warn about functions or methods that have very high complexity
    complexity: ["warn", { max: 5 }],

    // Configuration rules for the 'no-magic-numbers' rule
    // "no-magic-numbers": [
    //   "warn",
    //   {
    //     detectObjects: false,
    //     enforceConst: true,
    //     ignoreArrayIndexes: true,
    //     ignoreClassFieldInitialValues: true,
    //   },
    // ],

    // Configuration rules for the 'sort-imports' rule

    // Require explicit accessibility of class members
    // "@typescript-eslint/explicit-member-accessibility": [
    //   "error",
    //   {
    //     accessibility: "explicit",
    //     overrides: {
    //       constructors: "no-public",
    //     },
    //   },
    // ],

    // Define the order of class members in TypeScript classes
    "@typescript-eslint/member-ordering": [
      "warn",
      {
        default: [
          "public-static-field",
          "protected-static-field",
          "private-static-field",
          "public-instance-field",
          "protected-instance-field",
          "private-instance-field",
          "constructor",
          "public-instance-method",
          "protected-instance-method",
          "private-instance-method",
        ],
      },
    ],
  },
};
