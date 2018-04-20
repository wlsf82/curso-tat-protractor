const FormContainerComponent = require("./form/main");
const ImagePreviewContainerComponent = require("./imagePreview");

class CreateItem {
    constructor() {
        this.container = element(by.className("create-container"));

        this.formContainer = new FormContainerComponent(this.container);
        this.imagePreviewContainer = new ImagePreviewContainerComponent(this.container);
    }
}

module.exports = CreateItem;
