const { merge } = require('lodash');
const baseConfig = require('../.eslintrc.js');

module.exports = merge({}, baseConfig, {
  env: {
    mocha: true,
  },
  globals: {
    $: true,
    browser: true,
  },
  rules: {
    'no-unused-expressions': ['off'],
  },
});
