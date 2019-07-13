const FullCoverage = require('../model/Products/FullCoverage');
const MegaCoverage = require('../model/Products/MegaCoverage');
const SpecialFullCoverage = require('../model/Products/SpecialFullCoverage');
const SuperSale = require('../model/Products/SuperSale');
const Product = require('../model/Product');
const CarInsurance = require('../model/CarInsurance');

const productsAtDayZero = [
    new Product('Medium Coverage', 10, 20),
    new FullCoverage(2, 0),
    new Product('Low Coverage', 5, 7),
    new MegaCoverage(0, 80),
    new MegaCoverage(-1, 80),
    new SpecialFullCoverage( 15, 20),
    new SpecialFullCoverage( 10, 49),
    new SpecialFullCoverage( 5, 49),
    new SuperSale(3, 6),
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 0; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    if (i == 0) {
      carInsurance.getProducts().forEach(productPrinter);
    } else {
      carInsurance.updatePrice().forEach(productPrinter);
    }
    console.log('');
  }

