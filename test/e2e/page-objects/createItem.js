const FormComponent = require("../components/create-item/form");
const HeaderComponent = require("../components/header/main");
const Preview = require("../components/create-item/preview");

class CreateItem {
    constructor() {
        this.relativeUrl = "items/create";

        this.header = new HeaderComponent();
        this.preview = new Preview();
        this.form = new FormComponent();
    }
}

module.exports = CreateItem;
