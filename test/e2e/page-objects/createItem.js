const FormComponent = require("../components/create-item/form");
const HeaderComponent = require("../components/header/main");
const PreviewComponent = require("../components/create-item/preview");

class CreateItem {
    constructor() {
        this.relativeUrl = "items/create";

        this.header = new HeaderComponent();
        this.preview = new PreviewComponent();
        this.form = new FormComponent();
    }
}

module.exports = CreateItem;
