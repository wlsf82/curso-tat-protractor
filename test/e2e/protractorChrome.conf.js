module.exports.config = require("./createProtractorConfig.js")({
    capabilities: {
        browserName: "chrome",
        chromeOptions: {
            args: [
                "--headless",
                "--disable-gpu",
                "--window-size=1280,1024"
            ]
        }
    }
});
