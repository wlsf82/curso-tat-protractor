class Navigation {
    constructor() {
        this.container = element(by.id("navigation"));

        this.addNewItemButton = this.container.element(by.className("create-button"));
    }
}

module.exports = Navigation;
