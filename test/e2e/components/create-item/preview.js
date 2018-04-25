class Preview {
    constructor() {
        this.container = element(by.css(".create-container .image-preview-container"));

        this.image = this.container.element(by.id("created-image"));
    }
}

module.exports = Preview;
