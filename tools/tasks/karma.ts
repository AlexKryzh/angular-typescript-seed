/// <reference path="../../typings/index.d.ts"/>
/// <reference path="../../typings.d.ts"/>

var $ = global.tools;
var Server = require('karma').Server;

/**
 * Run test once and exit
 */
$.gulp.task('karma', 'Launch Unit Test', function(cb: any) {
  new Server({
    configFile: __dirname + '/../../' + $.config.test.karma,
    singleRun: true
  }, cb).start();
});

// const startKarma = (done: any, config: any = {}) => {
//   return new (<any>karma).Server(Object.assign({
//     configFile: join(process.cwd(), 'karma.conf.js'),
//     singleRun: true
//   }, config)).start(done);
// };

//$.gulp.task('karma', 'Launch Unit Test', function(cb: any) {

  //   return startKarma(cb, {
  //   preprocessors: {
  //     'dist/**/!(*spec).js': ['coverage']
  //   },
  //   reporters: ['mocha', 'coverage'],
  //   coverageReporter: {
  //     dir: 'coverage/',
  //     reporters: [
  //       { type: 'json', subdir: '.', file: 'coverage-final.json' }
  //     ]
  //   },
  // });

    // new Server({
    //     cole: path.resolve(__dirname, '../..', $.config.test.karma),
    //     singleRun: true
    // }, cb).start();

    // return new (<any>karma).Server(Object.assign({
    // configFile: join(process.cwd(), 'karma.conf.js'),
    // singleRun: true
    //  }, {})).start(cb);

    //We need find the way to get exact url of coverage
    //before we can open it in browser
    //open:TestCoverage

//});