module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  plugins: ['prettier'],
  env: {
    browser: true,
    node: true,
  },
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: ['*', 'test/**/*'],
      },
    ],
    'no-plusplus': ['off'],
    'prettier/prettier': [
      'error',
      {
        printWidth: 120,
        singleQuote: true,
        tabWidth: 2,
        trailingComma: 'es5',
      },
    ],
  },
};
