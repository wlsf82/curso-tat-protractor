class Items {
    constructor() {
        this.container = element(by.id("items-container"));

        this.viewButtonOfFirstItem = element.all(by.css("#items-container .item-card .item-view")).first();
    }
}

module.exports = Items;
