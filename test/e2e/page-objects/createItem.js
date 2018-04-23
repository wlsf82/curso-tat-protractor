const FormComponent = require("../components/create-item/form");
const HeaderComponent = require("../components/header/main");
const ImagePreviewContainerComponent = require("../components/create-item/imagePreviewContainer");

class CreateItem {
    constructor() {
        this.relativeUrl = "items/create";

        this.form = new FormComponent();
        this.header = new HeaderComponent();
        this.imagePreviewContainer = new ImagePreviewContainerComponent();
    }
}

module.exports = CreateItem;
