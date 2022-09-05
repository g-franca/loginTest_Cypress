module.exports = {
  "watchForFileChanges": false,
  
  e2e: {
    specPattern: "./cypress/integration",
    "experimentalSessionAndOrigin": true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    chromeWebSecurity: false, 
  },
  
  env: {
    urlMain: "http://automationpractice.com/index.php?controller=authentication&back=my-account"
  }
};
