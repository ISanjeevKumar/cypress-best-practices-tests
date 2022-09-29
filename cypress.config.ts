const { defineConfig } = require("cypress");
const getEnvironmnetUrls = require("./cypress/config/custom-env-config");
const { ENVIRONMENT_TYPE, APP_SECRET } = process.env;

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
      const envBasedRunCypressConfig = getEnvironmnetUrls(
        ENVIRONMENT_TYPE,
        APP_SECRET
      );
      const updatedEnvObject = Object.assign(
        config.env,
        envBasedRunCypressConfig.env
      );
      console.log("config:", config);
      return config;
    },
  },
});
