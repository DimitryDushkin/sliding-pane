module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/all',
    'airbnb',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'jest',
  ],
  rules: {
    'react/jsx-filename-extension': [0],
    'import/extensions': [0],
    'import/no-unresolved': [0],
    'react/sort-comp': [0],
    'react/button-has-type': [0],
    'no-return-assign': [0],
    'no-use-before-define': [0],
    'react/destructuring-assignment': [0],
    'jsx-a11y/alt-text': [0],
    'jest/require-hook': [0],
    'max-classes-per-file': [0],
  },
};
