const ItemsContainerComponent = require("./itemsContainer");
const NavigationComponent = require("./navigation");

class Homepage {
    constructor() {
        this.itemsContainer = new ItemsContainerComponent();
        this.navigation = new NavigationComponent();
    }
}

module.exports = Homepage;
