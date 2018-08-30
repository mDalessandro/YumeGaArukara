const webpackConfig = require('./webpack.config.dev');

module.exports = config => {
  config.set({
    basePath: '',

    frameworks: ['mocha'],

    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/unit/client/**/*.test.jsx',
      'test/unit/unitTestUtils.js',
    ],

    exclude: ['src/js/index.jsx'],

    preprocessors: {
      'test/unit/client/**/*.test.js': ['webpack'],
      'test/unit/client/**/*.test.jsx': ['webpack'],
      'test/unit/unitTestUtils.js': ['webpack'],
    },

    quiet: true,

    webpack: Object.assign(
      webpackConfig,
      {
        devtool: '',
        mode: 'development',
      },
      Object.assign(webpackConfig.externals || {}, {
        externals: {
          jsdom: 'window',
          cheerio: 'window',
          'react/lib/ExecutionEnvironment': 'react',
          'react/addons': 'react',
          'react-addons-test-utils': 'react-dom',
          'react/lib/ReactContext': 'react',
        },
      })
    ),

    webpackMiddleware: {
      logLevel: 'silent',
      stats: 'errors-only',
    },

    reporters: ['spec'],

    specReporter: {
      showSpecTiming: true,
      suppressSkipped: true,
    },

    junitReporter: {
      outputDir: './reports',
      outputFile: 'junit.xml',
    },

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    autoWatch: true,

    browsers: ['ChromeHeadless'],

    singleRun: false,

    concurrency: Infinity,
  });
};
