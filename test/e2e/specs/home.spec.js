const helper = require("protractor-helper");

const HomeComponent = require("../components/home/main");

describe("given I'm at the home page", () => {
    const home = new HomeComponent();

    beforeEach(() => browser.get(""));

    describe("when I click the 'add new item' button", () => {
        it("then I'm redirected to the relative URL 'items/create'", () => {
            helper.clickWhenClickable(
                home
                    .navigation
                    .addNewItemButton
            );

            helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}items/create`);
        });
    });
});
