module.exports.config = require("./createProtractorConfig.js")({
    capabilities: {
        browserName: "firefox",
        "marionette": true,
        "moz:firefoxOptions": {
            "args": ["--headless"]
        }
    }
});
