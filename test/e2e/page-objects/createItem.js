const FormComponent = require("../components/create-item/form");
const ImagePreviewContainerComponent = require("../components/create-item/imagePreviewContainer");

class CreateItem {
    constructor() {
        this.relativeUrl = "items/create";

        this.form = new FormComponent();
        this.imagePreviewContainer = new ImagePreviewContainerComponent();
    }
}

module.exports = CreateItem;
