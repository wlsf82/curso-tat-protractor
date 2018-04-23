class ImagePreviewContainer {
    constructor() {
        this.container = element(by.css(".create-container .image-preview-container"));

        this.image = this.container.element(by.id("created-image"));
    }
}

module.exports = ImagePreviewContainer;
