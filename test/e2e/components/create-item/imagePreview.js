class ImagePreviewContainer {
    constructor(parentElement) {
        this.container = parentElement.element(by.className("image-preview-container"));

        this.image = this.container.element(by.id("created-image"));
    }
}

module.exports = ImagePreviewContainer;
