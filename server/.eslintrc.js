const { merge } = require('lodash');
const baseConfig = require('../.eslintrc');

module.exports = merge({}, baseConfig, {
  extends: [...baseConfig.extends, 'plugin:security/recommended'],
  plugins: [...baseConfig.plugins, 'security'],
});
