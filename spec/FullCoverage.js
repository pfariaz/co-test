const expect = require('chai').expect;
const FullCoverage = require('../src/model/Products/FullCoverage');

describe('FullCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Full Coverage' as name", function() {
          const fullCoverage = new FullCoverage(10, 20)   
          expect(fullCoverage.name).to.equal("Full Coverage")
        });
      });
      describe('updating price', function() {
        it('should call updatePrice and degrates sellIn but price add one', function() {
          const product = new FullCoverage(10, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(9);
          expect(product.getPrice()).to.equal(21);
        });

        it('should call updatePrice and degrates sellIn but price add two', function() {
          const product = new FullCoverage(0, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(-1);
          expect(product.getPrice()).to.equal(22);
        });

        it('should call updatePrice and only degrates sellIn and price set to 50', function() {
          const product = new FullCoverage(0, 60);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(-1);
          expect(product.getPrice()).to.equal(50);
        });
      });
});