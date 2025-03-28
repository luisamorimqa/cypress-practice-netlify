const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://qa-practice.netlify.app/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
