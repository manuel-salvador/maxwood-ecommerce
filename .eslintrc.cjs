const { resolve } = require('node:path');

const project = resolve(__dirname, 'tsconfig.json');

module.exports = {
  root: true,
  plugins: ['prettier', 'import'],
  extends: ['next/core-web-vitals', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
    project,
  },
  settings: {
    'import/resolver': {
      typescript: {
        project,
      },
    },
  },
  rules: {
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        printWidth: 100,
        trailingComma: 'all',
        singleQuote: true,
        bracketSpacing: true,
      },
    ],
    'no-unused-vars': 'warn',
    'react/self-closing-comp': 'warn',
    'no-console': 'warn',
    'import/order': [
      'warn',
      {
        groups: ['type', 'builtin', 'object', 'external', 'internal', 'parent', 'sibling', 'index'],
        pathGroups: [
          {
            pattern: '~/**',
            group: 'external',
            position: 'after',
          },
        ],
        'newlines-between': 'always',
      },
    ],
  },
};
