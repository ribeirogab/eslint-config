const prettierConfig = require('./prettier.config');

module.exports = {
  extends: [
    '@rocketseat/eslint-config/next',
    'plugin:tailwindcss/recommended',
    'next/core-web-vitals',
  ],
  rules: {
    'prettier/prettier': [
      'error',
      {
        ...prettierConfig,
      },
    ],
    'padding-line-between-statements': [
      'error',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'class',
          'return',
          'continue',
          'break',
          'throw',
          'multiline-expression',
          'block-like',
          'function',
          'iife',
          'export',
        ],
      },
      {
        blankLine: 'always',
        prev: [
          'multiline-expression',
          'block-like',
          'function',
          'iife',
          'class',
          'export',
        ],
        next: '*',
      },
      {
        blankLine: 'any',
        prev: ['import'],
        next: ['import'],
      },
      {
        blankLine: 'any',
        prev: ['export'],
        next: ['export'],
      },
    ],
    'import/order': [
      'error',
      {
        warnOnUnassignedImports: true,
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
        groups: [
          'builtin',
          'external',
          ['internal', 'parent', 'sibling', 'index'],
        ],
      },
    ],
  },
};
