exports.config = {

    specs: [
        './src/tests/**/*.js'
    ],

    capabilities: [{
        browserName: 'chrome',
        maxInstances: 1,
        chromeOptions: {
            args: ['--start-maximized', 'disable-extensions', '--disable-infobars'],
            prefs: {
              'credentials_enable_service': false,
              'profile': {
                'password_manager_enabled': false
              }
            }
          }
    }],

    services: ['selenium-standalone'],

    screenshotOnReject: true,

    screenshotPath: './screenshots/',

    sync: false,

    logLevel: 'silent',

    waitforTimeout: 20000,

    framework: 'mocha',

    reporters: ['spec', 'allure'],

    reporterOptions: {
      allure: {
          outputDir: './reports/allure-results',
          disableWebdriverStepsReporting: true,
          disableWebdriverScreenshotsReporting: false,
          useCucumberStepReporter: false
      }
  },

    mochaOpts: {
        timeout: 20000,
        ui: 'bdd',
        bail: true 
    },

    baseUrl: "https://www.mapbox.com/",

    before: function() {
      const chai = require('chai'),
      chai_as_promised = require('chai-as-promised');
      chai.use(chai_as_promised);
      chai.should();
      global.expect = chai.expect;
      
    },

   afterTest: function(test) {
      if(test.error !== undefined) {
        browser.takeScreenshot();
      }
   }
}