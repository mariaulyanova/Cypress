import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.spec.{js,jsx,ts,tsx}",
    // supportFile: "",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
