const FormComponent = require("./form");
const NavigationComponent = require("./navigation");

class FormContainer {
    constructor(parentElement) {
        this.container = parentElement.element(by.className("create-item-form-container"));

        this.form = new FormComponent(this.container);
        this.navigation = new NavigationComponent(this.container);
    }
}

module.exports = FormContainer;
