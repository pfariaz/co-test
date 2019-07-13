const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class SuperSale extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.SUPER_SALE, sellIn, price)
    }

    updatePrice() {
        if (this.price > 0 && this.sellIn > 0) {
            this.price -= 1;
        }
        super.updatePrice();
    }
}

module.exports = SuperSale;