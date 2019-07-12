const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class FullCoverage extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.FULL_COVERAGE, sellIn, price)
    }
}

module.exports = FullCoverage;