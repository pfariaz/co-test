const expect = require('chai').expect;
const SpecialFullCoverage = require('../src/model/Products/SpecialFullCoverage');

describe('SpecialFullCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const specialFullCoverage = new SpecialFullCoverage(10, 20)   
          expect(specialFullCoverage.name).to.equal("Special Full Coverage")
        });
      });
});