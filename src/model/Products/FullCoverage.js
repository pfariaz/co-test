const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class FullCoverage extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.FULL_COVERAGE, sellIn, price)
    }

    updatePrice() {
        this.sellIn -= 1;
        if (this.price < 50) {
            this.price += 1;
            if (this.sellIn < 0) {
                this.price += 1;
            }
        } else {
            this.price = 50;
        }
    }
}

module.exports = FullCoverage;