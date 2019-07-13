const expect = require('chai').expect;
const MegaCoverage = require('../src/model/Products/MegaCoverage');

describe('MegaCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const megaCoverage = new MegaCoverage(10, 20)   
          expect(megaCoverage.name).to.equal("Mega Coverage")
        });
      });
      describe('updating price', function() {
        it('should call updatePrice but price and sellIn remain the same', function() {
          const product = new MegaCoverage(10, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(10);
          expect(product.getPrice()).to.equal(20);
        });
      });
});