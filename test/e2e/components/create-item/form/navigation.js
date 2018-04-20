class Navigation {
    constructor(parentElement) {
        this.container = parentElement.element(by.className("form-navigation"));

        this.backButton = this.container.element(by.className("back-arrow"));
        this.createButton = this.container.element(by.id("submit-button"));
    }
}

module.exports = Navigation;
