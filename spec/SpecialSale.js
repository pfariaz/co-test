const expect = require('chai').expect;
const SpecialSale = require('../src/model/Products/SpecialSale');

describe('SpecialSale model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const specialSale = new SpecialSale(10, 20)   
          expect(specialSale.name).to.equal("Special Sale")
        });
      });
});