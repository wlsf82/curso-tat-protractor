const ItemsContainerComponent = require("./itemsContainer");
const NavigationComponent = require("./navigation");

class Home {
    constructor() {
        this.itemsContainer = new ItemsContainerComponent();
        this.navigation = new NavigationComponent();
    }
}

module.exports = Home;
