import { defineConfig } from "cypress";
import browserify from "@cypress/browserify-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import { preprendTransformerToOptions } from "@badeball/cypress-cucumber-preprocessor/browserify";
import cypressOnFix from "cypress-on-fix";

async function setupNodeEvents(
  on: Cypress.PluginEvents,
  config: Cypress.PluginConfigOptions,
): Promise<Cypress.PluginConfigOptions> {
  // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
  on = cypressOnFix(on);
  require("cypress-mochawesome-reporter/plugin")(on);
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    browserify({
      ...preprendTransformerToOptions(config, browserify.defaultOptions),
      typescript: require.resolve("typescript"),
    }),
  );

  // Make sure to return the config object as it might have been modified by the plugin.
  return config;
}

export default defineConfig({
  e2e: {
    baseUrl: "https://www.lumahealth.io",
    defaultCommandTimeout: 10000,
    specPattern: "cypress/e2e/**/*.feature",
    chromeWebSecurity: false,
    screenshotOnRunFailure: true,
    viewportWidth: 1280,
    viewportHeight: 720,
    setupNodeEvents,
  },
  reporter: "cypress-mochawesome-reporter",
  retries: 2,
  reporterOptions: {
    charts: true,
    reportPageTitle: "Luma Challenge",
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
});