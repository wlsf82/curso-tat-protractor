const CreateItemComponent = require("../components/create-item/main");

class CreateItemPage {
    constructor() {
        this.relativeUrl = "items/create";

        this.container = new CreateItemComponent();
    }
}

module.exports = CreateItemPage;
