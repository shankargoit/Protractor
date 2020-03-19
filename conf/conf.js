// An example configuration file.
var HtmlScreenshotReporter = require('C:/Users/vimal/AppData/Roaming/npm/node_modules/protractor/node_modules/protractor-jasmine2-html-reporter');

var reporter = new HtmlScreenshotReporter({
  dest: 'target/screenshots',
  filename: 'my-report.html'
});



exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['../specs/Calculator.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  },

  // Setup the report before any tests start
  //beforeLaunch: function() {
  // return new Promise(function(resolve){
  //  reporter.beforeLaunch(resolve);
  //});
  //},

  // Assign the test reporter to each running instance
  onPrepare: function () {

    var jasmineReporters = require('C:/Users/vimal/AppData/Roaming/npm/node_modules/jasmine-reporters');
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './',
      filePrefix: 'xmlresults'
    }));


    jasmine.getEnv().addReporter(reporter);
    var AllureReporter = require('C:/Users/vimal/AppData/Roaming/npm/node_modules/jasmine-allure-reporter');
    jasmine.getEnv().addReporter(new AllureReporter({
      resultsDir: 'allure-results'
    }));
  },

  // Close the report after all tests finish
  //afterLaunch: function(exitCode) {
  //return new Promise(function(resolve){
  // reporter.afterLaunch(resolve.bind(this, exitCode));
  // });
  //}

  //HTMLReport called once tests are finished
  onComplete: function () {
    var browserName, browserVersion;
    var capsPromise = browser.getCapabilities();

    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');

      var HTMLReport = require('C:/Users/vimal/AppData/Roaming/npm/node_modules/protractor-html-reporter-2');

      testConfig = {
        reportTitle: 'Protractor Test Execution Report',
        outputPath: './',
        outputFilename: 'ProtractorTestReport',
        screenshotPath: './screenshots',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: true,
        testPlatform: platform
      };
      new HTMLReport().from('xmlresults.xml', testConfig);
    });
  }

};
