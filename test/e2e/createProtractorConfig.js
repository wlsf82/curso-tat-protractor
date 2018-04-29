const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: "http://localhost:4001/",
        specs: ["specs/*.spec.js"],
        directConnect: true,
        onPrepare: () => {
            browser.ignoreSynchronization = true;
            jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailedSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true,
            }));
            jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
                savePath: "test/e2e/html-report",
                fileName: "curso-tat-protractor",
                fixedScreenshotName: true,
                cleanDestination: false,
                consolidate: true,
                takeScreenshotsOnlyOnFailures: true,
            }));
            afterEach(() => {
                browser.manage().deleteAllCookies();
                return browser.executeScript("sessionStorage.clear(); localStorage.clear();");
            });
        },
    };

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};
