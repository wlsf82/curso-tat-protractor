const helper = require("protractor-helper");

class Form {
    constructor() {
        this.container = element(by.css(".create-container .create-item-form-container form"));

        this.titleField = this.container.element(by.id("title-input"));
        this.descriptionField = this.container.element(by.id("description-input"));
        this.imageUrlField = this.container.element(by.id("imageUrl-input"));
        this.backButton = this.container.element(by.css(".form-navigation .back-arrow"));
        this.createButton = this.container.element(by.css(".form-navigation #submit-button"));
        this.errors = element.all(by.css(".create-container .create-item-form-container form .error"));
    }

    fillWithDataAndSubmit(data) {
        helper.fillFieldWithTextWhenVisible(this.titleField, data.title);
        helper.fillFieldWithTextWhenVisible(this.descriptionField, data.description);
        helper.fillFieldWithTextWhenVisible(this.imageUrlField, data.imageUrl);
        helper.clickWhenClickable(this.createButton);
    }
}

module.exports = Form;
