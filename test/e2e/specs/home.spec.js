const helper = require("protractor-helper");

const HomeComponent = require("../components/home/main");

describe("given I'm at the home page", () => {
    const home = new HomeComponent();

    beforeEach(() => browser.get(""));

    describe("when I click the 'add new item' button", () => {
        beforeEach(() => helper.clickWhenClickable(home.navigation.addNewItemButton));

        it("then I'm redirected to the relative URL 'items/create'", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}items/create`);
        });
    });
});
