const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class SpecialFullCoverage extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.SPECIAL_FULL_COVERAGE, sellIn, price)
    }

    updatePrice() {
        this.sellIn -= 1;
        if(this.sellIn === 0) {
            this.price = 0;
            return;
        }

        if (this.price < 49) {
            if (this.sellIn <= 10 && this.sellIn >= 6){
                this.price += 2;
            } else if (this.sellIn <= 5 && this.sellIn > 0) {
                this.price += 3;
            } else {
                this.price += 1;
            }
        } else {
            this.price = 50;
        }
    }
}

module.exports = SpecialFullCoverage;