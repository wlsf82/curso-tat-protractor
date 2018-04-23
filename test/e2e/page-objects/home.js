const ItemsComponent = require("../components/items/main");
const NavigationComponent = require("../components/navigation/main");

class Home {
    constructor() {
        this.relativeUrl = "";

        this.items = new ItemsComponent();
        this.navigation = new NavigationComponent();
    }
}

module.exports = Home;
