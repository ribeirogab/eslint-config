const prettierConfig = require('./prettier.config');

module.exports = {
  root: true,
  ignorePatterns: ['node_modules', 'dist', 'coverage'],
  env: {
    node: true,
    es2021: true,
    jest: true,
  },
  plugins: ['@typescript-eslint', 'import', 'prettier', 'no-autofix'],
  extends: ['eslint:recommended'],
  overrides: [
    {
      files: ['*.js'], // Rules for JavaScript
      extends: 'airbnb-base',
      rules: {},
    },
    {
      files: ['*.ts'], // Rules for TypeScript
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb-typescript/base',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:import/typescript',
      ],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        sourceType: 'module',
        project: 'tsconfig.json',
      },
      settings: {
        'import/parsers': {
          '@typescript-eslint/parser': ['.ts'],
        },
        'import/resolver': {
          typescript: {
            project: 'tsconfig.json',
            alwaysTryTypes: true,
          },
        },
        'import/external-module-folders': ['node_modules', '@types'],
      },
      rules: {
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-empty-interface': 'off',
        '@typescript-eslint/member-ordering': 'warn',
        '@typescript-eslint/lines-between-class-members': [
          'error',
          'always',
          { exceptAfterSingleLine: true },
        ],
        '@typescript-eslint/no-unused-vars': [
          'error',
          {
            vars: 'all',
            args: 'all',
            argsIgnorePattern: '^_',
            caughtErrors: 'all',
          },
        ],
        '@typescript-eslint/no-useless-constructor': 'off',
      },
    },
    {
      files: ['*'], // Post shared rules
      extends: ['prettier'],
      rules: {
        'prettier/prettier': ['error', { ...prettierConfig }],
        'no-warning-comments': ['warn', { location: 'anywhere' }],
        'no-autofix/capitalized-comments': [
          'warn',
          'always',
          { ignorePattern: 'prettier-ignore' },
        ],
        'no-unreachable': 'error',
        'sort-imports': ['error', { ignoreDeclarationSort: true }],
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
        'import/prefer-default-export': 'off',
        'import/no-default-export': 'error',
        'import/no-extraneous-dependencies': 'off',
        'import/extensions': ['error', 'never'],
        'import/order': [
          'error',
          {
            warnOnUnassignedImports: true,
            'newlines-between': 'always',
            alphabetize: { order: 'asc' },
            groups: [
              'builtin',
              'external',
              ['internal', 'parent', 'sibling', 'index'],
            ],
          },
        ],
        eqeqeq: 'error',
        'max-classes-per-file': 'off',
        'no-underscore-dangle': 'off',
        'no-continue': 'off',
        'no-restricted-syntax': 'off',
        'class-methods-use-this': 'off',
        'guard-for-in': 'off',
        'no-await-in-loop': 'off',
        'arrow-body-style': 'off',
        'prefer-arrow-callback': 'off',
        'lines-between-class-members': 'off',
        'no-useless-constructor': 'off',
      },
    },
  ],
};
