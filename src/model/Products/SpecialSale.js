const Product = require('../Product');
const {PRODUCT_NAMES} = require('../../config/constants');

class SpecialSale extends Product {
    constructor(sellIn, price) {
        super(PRODUCT_NAMES.SPECIAL_SALE, sellIn, price)
    }
}

module.exports = SpecialSale;