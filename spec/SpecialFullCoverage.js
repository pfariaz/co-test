const expect = require('chai').expect;
const SpecialFullCoverage = require('../src/model/Products/SpecialFullCoverage');

describe('SpecialFullCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const specialFullCoverage = new SpecialFullCoverage(10, 20)   
          expect(specialFullCoverage.name).to.equal("Special Full Coverage")
        });
      });
      describe('updating price', function() {
        it('should call updatePrice and degrates price and sellIn', function() {
          const product = new SpecialFullCoverage(10, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(9);
          expect(product.getPrice()).to.equal(22);
        });
        it('should call updatePrice and degrates sellIn to zero and price too', function() {
          const product = new SpecialFullCoverage(1, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(0);
          expect(product.getPrice()).to.equal(0);
        });
        it('should call updatePrice and degrades sellIn and price increases one time', function() {
          const product = new SpecialFullCoverage(15, 30);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(14);
          expect(product.getPrice()).to.equal(31);
        });
        it('should call updatePrice and degrades sellIn and price increases two times', function() {
          const product = new SpecialFullCoverage(10, 30);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(9);
          expect(product.getPrice()).to.equal(32);
        });
        it('should call updatePrice and degrades sellIn and price increases three times', function() {
          const product = new SpecialFullCoverage(4, 20);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(3);
          expect(product.getPrice()).to.equal(23);
        });
        it('create product with price over 50 and when call updateProce should set price to 50', function() {
          const product = new SpecialFullCoverage(4, 60);
          product.updatePrice();
          expect(product.getSellIn()).to.equal(3);
          expect(product.getPrice()).to.equal(50);
        });
      });
});