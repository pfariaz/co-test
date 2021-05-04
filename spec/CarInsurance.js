const expect = require('chai').expect;

const CarInsurance = require('../src/model/CarInsurance');
const Product = require('../src/model/Product');

describe('CarInsurance model', function() {
    describe('constructor', function() {
        it('should create a carInsurance with all parameters', function() {
          const product = new Product('foo', 10, 20)
          const carInsurance = new CarInsurance([
              product
          ])
          expect(product).is.not.undefined
          expect(carInsurance).is.not.undefined
        });
        it('should create a carInsurance with no parameters', function() {
            const carInsurance = new CarInsurance()
            expect(carInsurance).is.not.undefined
          });

      });
    describe('getters and setters', function() {
      it('should get all products inside of the carInsurance object', function() {
        const product = new Product('foo', 10, 20)
        const carInsurance = new CarInsurance([
            product
        ])
        expect(carInsurance).is.not.undefined
        expect(carInsurance.getProducts().length).to.equal(1)
      });
    });
    describe('updating price', function() {
        it('should call updatePrice method for each product', function() {
          const productFoo = new Product('foo', 10, 20)
          const productBar = new Product('bar', 20, 6)
          const carInsurance = new CarInsurance([
              productFoo,
              productBar
          ])
          const productsWithPriceSellInUpdated = carInsurance.updatePrice();
          expect(carInsurance).is.not.undefined
          expect(carInsurance.getProducts().length).to.equal(2)
          expect(productsWithPriceSellInUpdated.length).to.equal(2)

        });
      });
});