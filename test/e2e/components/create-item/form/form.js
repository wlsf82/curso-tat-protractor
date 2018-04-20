class Form {
    constructor(parentElement) {
        this.container = parentElement.element(by.css("form"));

        this.titleField = this.container.element(by.id("title-input"));
        this.descriptionField = this.container.element(by.id("description-input"));
        this.imageUrlField = this.container.element(by.id("imageUrl-input"));
        this.errors = element.all(by.css(".create-container form .error"));
    }
}

module.exports = Form;
