// External libs are defined first
const helper = require("protractor-helper");

// Page Objects are defined after external libs
const CreateItemPage = require("../page-objects/createItem");
const HomePage = require("../page-objects/home");

// Components are defined after Page Objects
const HeaderComponent = require("../components/header/main");

// Constants are defined after components
const constants = require("../constants");

describe("given I'm at the relative url 'items/create'", () => {
    // Page Objects are instantiated first
    const createItemPage = new CreateItemPage();
    const homePage = new HomePage();

    // Components are instantiated after Page Objects
    const header = new HeaderComponent();

    // Single line beforeEach arrow function
    beforeEach(() => browser.get(createItemPage.relativeUrl));

    describe("then the image preview element", () => {
        it("has no value in the 'src' attribute", () => {
            expect(createItemPage.imagePreviewContainer.image.getAttribute(constants.SRC_ATTRIBUTE))
                .toEqual("");
        });

        it("doesn't render while the image URL filed is empty", () => {
            expect(createItemPage.imagePreviewContainer.image.isDisplayed()).not.toBe(true);
        });
    });

    describe("when I fill the image URL field with a valid image path", () => {
        // Multiple lines beforeEach arrow function
        beforeEach(() => {
            helper.fillFieldWithTextWhenVisible(createItemPage.form.imageUrlField, constants.IMAGE_URL);
        });

        describe("then the image preview element", () => {
            it("uses the provided value in the 'src' attribute", () => {
                expect(createItemPage.imagePreviewContainer.image.getAttribute(constants.SRC_ATTRIBUTE))
                    .toEqual(constants.IMAGE_URL);
            });

            it("is rendered based on the provided image url path", () => {
                const imagePreview = element(by.css(`img[src='${constants.IMAGE_URL}']`))

                helper.waitForElementVisibility(imagePreview);
            });
        });
    });

    describe("when I click the back button", () => {
        beforeEach(() => helper.clickWhenClickable(createItemPage.form.backButton));

        it("then I'm redirected to the homepage", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(browser.baseUrl);
        });
    });

    describe("when I click the header's logo", () => {
        beforeEach(() => helper.clickWhenClickable(header.logo));

        it("then I'm redirected to the homepage", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(browser.baseUrl);
        });
    });

    describe("when I submit the form without filling any field", () => {
        beforeEach(() => helper.clickWhenClickable(createItemPage.form.createButton));

        it("then three error messages are shown, one for each of the mandatory fields", () => {
            helper.waitForElementVisibility(createItemPage.form.errors.last());

            expect(createItemPage.form.errors.count()).toBe(3);
        });
    });

    describe("when I fill the form with valid data and submit", () => {
        const newItem = {
            title: "test item",
            description: "foo bar baz",
            imageUrl: "http://localhost:4001/img/logo.svg"
        };

        beforeEach(() => createItemPage.form.fillFormWithDataAndSubmit(newItem));

        it("then I'm redirected to the home page and an item with the provided title is displayed", () => {
            helper.waitForUrlToBeEqualToExpectedUrl(browser.baseUrl);
            helper.waitForTextToBePresentInElement(homePage.items.container, newItem.title);
        });
    });
});
