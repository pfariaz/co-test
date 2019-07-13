const expect = require('chai').expect;
const SuperSale = require('../src/model/Products/SuperSale');

describe('SuperSale model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const superSale = new SuperSale(10, 20)   
          expect(superSale.name).to.equal("Super Sale")
        });
      });
      describe('updating price', function() {
        it('should call updatePrice and degrates price and sellIn', function() {
          const product = new SuperSale(10, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(9);
          expect(product.getPrice()).to.equal(18);
        });
  
        it('should call updatePrice but only degrades sellIn because price is zero', function() {
          const product = new SuperSale(0, 0);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(-1);
          expect(product.getPrice()).to.equal(0);
        });
      });
});