module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    curly: 'warn',
    'dot-notation': 'warn',
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'info'],
      },
    ],
    'no-else-return': 'warn',
    'no-lonely-if': 'warn',
    'no-restricted-syntax': [
      'warn',
      {
        message: "Use 't(...)' instead of literal text in JSX",
        selector: 'JSXText[value=/\\w/]',
      },
    ],
    'no-unneeded-ternary': 'warn',
    'no-unused-expressions': 'warn',
    'no-unused-vars': 'off',
    'no-useless-return': 'warn',
    'no-var': 'warn',
    'object-shorthand': 'warn',
    'one-var': ['warn', 'never'],
    'prefer-arrow-callback': 'warn',
    'no-shadow': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-use-before-define': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/jsx-filename-extension': 'off',
    'max-len': 'off',
    'prefer-const': [
      'warn',
      {
        destructuring: 'all',
      },
    ],
  },
};
