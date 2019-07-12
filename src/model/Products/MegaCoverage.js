const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class MegaCoverage extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.MEGA_COVERAGE, sellIn, price)
    }
}

module.exports = MegaCoverage;