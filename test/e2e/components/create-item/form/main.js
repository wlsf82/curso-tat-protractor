const helper = require("protractor-helper");

const FormComponent = require("./form");
const NavigationComponent = require("./navigation");

class FormContainer {
    constructor(parentElement) {
        this.container = parentElement.element(by.className("create-item-form-container"));

        this.form = new FormComponent(this.container);
        this.navigation = new NavigationComponent(this.container);
    }

    fillFormWithDataAndSubmit(data) {
        helper.fillFieldWithTextWhenVisible(
            this.form.titleField,
            data.title
        );
        helper.fillFieldWithTextWhenVisible(
            this.form.descriptionField,
            data.description
        );
        helper.fillFieldWithTextWhenVisible(
            this.form.imageUrlField,
            data.imageUrl
        );
        helper.clickWhenClickable(this.navigation.createButton);
    }
}

module.exports = FormContainer;
