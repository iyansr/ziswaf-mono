module.exports = {
  extends: [
    'next',
    'eslint:recommended',
    'turbo',
    'prettier',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['simple-import-sort', 'prettier', 'import'],
  rules: {
    '@next/next/no-html-link-for-pages': 'off',
    'prettier/prettier': 'error',
    'simple-import-sort/exports': 'error',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'simple-import-sort/imports': [
      'warn',
      {
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          ['^react', '^react-dom', '^@?\\w'],
          ['^next'],
          // Packages. `react` related packages come first.
          // Internal packages.
          ['^(@)(/.*|$)'],
          // Side effect imports.
          ['^\\u0000'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          ['^.+\\.?(css)$'], // Style imports.
        ],
      },
    ],
  },
  parserOptions: {
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
};
