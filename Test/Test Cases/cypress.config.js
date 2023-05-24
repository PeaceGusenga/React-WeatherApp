const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    screenshotsFolder: "../TestEvidence/Screenshots",
    videosFolder: "../TestEvidence/Videos",
    screenshotsOnFailure: true,
    baseUrl: "https://gheorghedarle.github.io/React-WeatherApp/",
  },
});
