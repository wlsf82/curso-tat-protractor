const helper = require("protractor-helper");

const HomePage = require("../page-objects/home");

describe("given I'm at the home page", () => {
    const homePage = new HomePage();

    beforeEach(() => browser.get(homePage.relativeUrl));

    describe("when I click the 'add new item' button", () => {
        beforeEach(() => helper.click(homePage.navigation.addNewItemButton));

        it("then I'm redirected to the relative URL 'items/create'", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}items/create`);
        });
    });
});
