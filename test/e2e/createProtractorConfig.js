const Jasmine2HtmlReporter = require("protractor-jasmine2-html-reporter");
const SpecReporter = require("jasmine-spec-reporter").SpecReporter;

module.exports = (providedConfig) => {
    const defaultConfig = {
        baseUrl: "http://localhost:4001/",
        specs: ["specs/*.spec.js"],
        seleniumAddress: "http://localhost:4444/wd/hub",
        onPrepare: () => {
            jasmine.getEnv().addReporter(new SpecReporter({
                displayFailuresSummary: true,
                displayFailedSpec: true,
                displaySuiteNumber: true,
                displaySpecDuration: true,
            }));
            browser.ignoreSynchronization = true;
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
        jasmineNodeOpts: {
            onComplete: null,
            isVerbose: false,
            showColors: true,
            includeStackTrace: true,
        },
    };

    return Object.assign(
        {},
        defaultConfig,
        providedConfig
    );
};