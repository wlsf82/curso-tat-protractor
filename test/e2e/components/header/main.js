class Header {
    constructor() {
        this.container = element(by.id("title-container"));

        this.logo = this.container.element(by.css("img"));
    }
}

module.exports = Header;
