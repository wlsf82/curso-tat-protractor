const helper = require("protractor-helper");

const HomePage = require("../page-objects/home");

describe("given I'm at the home page", () => {
    const homePage = new HomePage();

    beforeEach(() => browser.get(homePage.relativeUrl));

    describe("when I visit the relative URL of the first item", () => {
        let firstItemRelativeUrl;

        beforeEach(() => {
            homePage.items.viewButtonOfFirstItem.getAttribute("href")
                .then(hrefValue => {
                    firstItemRelativeUrl = hrefValue.replace(browser.baseUrl, "/");
                    browser.get(firstItemRelativeUrl);
                });
        });

        it("then I see a button to go to the update item page", () => {
            const updateButton = element(by.css(`a[href='${firstItemRelativeUrl}/update']`));

            helper.waitForElementVisibility(updateButton);
        });
    })


});
