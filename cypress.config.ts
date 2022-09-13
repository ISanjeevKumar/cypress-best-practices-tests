const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  screenshotOnRunFailure: true,
  video: false,
  screenshotsFolder: "test-report/assets",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    reportDir: "test-report",
    reportPageTitle: "Cypress 10.0 Report",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      console.log("config:", config);
    },
  },
});
