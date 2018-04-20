const helper = require("protractor-helper");

const HomepageComponent = require("../components/homepage/main");

describe("given I'm at the home page", () => {
    const homepage = new HomepageComponent();

    beforeEach(() => browser.get(""));

    describe("when I click the 'add new item' button", () => {
        it("then I'm redirected to the relative URL 'items/create'", () => {
            helper.clickWhenClickable(
                homepage
                    .navigation
                    .addNewItemButton
            );

            helper.waitForUrlToBeEqualToExpectedUrl(`${browser.baseUrl}items/create`);
        });
    });
});
