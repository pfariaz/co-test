const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class SpecialFullCoverage extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.SPECIAL_FULL_COVERAGE, sellIn, price)
    }
}

module.exports = SpecialFullCoverage;