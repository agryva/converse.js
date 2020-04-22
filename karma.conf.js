/* global module */
const path = require('path');

module.exports = function(config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      { pattern: 'dist/*.js.map', included: false },
      { pattern: 'dist/*.css.map', included: false },
      { pattern: "dist/emojis.js", served: true },
      "dist/converse.js",
      "dist/converse.css",
      { pattern: "dist/webfonts/**/*.*", included: false },
      "node_modules/sinon/pkg/sinon.js",
      "tests/console-reporter.js",
      "tests/mock.js",
      "spec/spoilers.js",
      "spec/roomslist.js",
      "spec/utils.js",
      "spec/converse.js",
      "spec/bookmarks.js",
      "spec/headline.js",
      "spec/disco.js",
      "spec/protocol.js",
    ],
    exclude: ['**/*.sw?'],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {},

    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],

    webpack: {
      mode: 'development',
      devtool: 'inline-source-map',
      module: {
         rules: [{
           test: /\.js$/,
           exclude: /(node_modules|test)/
         }]
      },
      output: {
        path: path.resolve('test'),
        filename: '[name].out.js',
        chunkFilename: '[id].[chunkHash].js'
      }
    },


    port: 9876,
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
