const FullCoverage = require('../model/Products/FullCoverage');
const MegaCoverage = require('../model/Products/MegaCoverage');
const SpecialFullCoverage = require('../model/Products/SpecialFullCoverage');
const SpecialSale = require('../model/Products/SpecialSale');
const CarInsurance = require('../model/CarInsurance');

const productsAtDayZero = [
    new FullCoverage(10, 20),
    new MegaCoverage(2, 0),
    new SpecialFullCoverage(0, 80),
    new SpecialSale(-1, 80),
    new FullCoverage(15, 20),
    new SpecialFullCoverage(10, 49),
    new SpecialSale(5, 49),
    new MegaCoverage(3, 6),
  ];
  
  const carInsurance = new CarInsurance(productsAtDayZero);
  const productPrinter = function (product) {
    console.log(`${product.name}, ${product.sellIn}, ${product.price}`);
  };
  
  for (let i = 1; i <= 30; i += 1) {
    console.log(`Day ${i}`);
    console.log('name, sellIn, price');
    carInsurance.updatePrice().forEach(productPrinter);
    console.log('');
  }

