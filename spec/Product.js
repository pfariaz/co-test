const expect = require('chai').expect;
const Product = require('../src/model/Product');

describe('Product model', function() {
    describe('constructor', function() {
        it('should create a product with all parameters', function() {
          const product = new Product('foo', 10, 20)   
          expect(product).is.not.undefined
        });

      });
    describe('getters and setters', function() {
      it('should get all attributes when a product is created', function() {
        const product = new Product('foo', 10, 20)   
        expect(product.getName()).to.equal('foo');
        expect(product.getSellIn()).to.equal(10);
        expect(product.getPrice()).to.equal(20);
      });
      it('should call setters for each attribute', function() {
        const product = new Product('foo', 10, 20)   

        product.setName('bar');
        product.setSellIn(100);
        product.setPrice(99);

        expect(product.getName()).to.equal('bar');
        expect(product.getSellIn()).to.equal(100);
        expect(product.getPrice()).to.equal(99);
      });
    });
});