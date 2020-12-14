const {Octokit} = require("@octokit/rest");

module.exports = new Octokit({
  userAgent: "reactTutorial/1.0.0",
  timeZone: "Europe/Amsterdam",
  baseUrl: "https://api.github.com"
});
