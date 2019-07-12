const expect = require('chai').expect;
const MegaCoverage = require('../src/model/Products/MegaCoverage');

describe('MegaCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Mega Coverage' as name", function() {
          const megaCoverage = new MegaCoverage(10, 20)   
          expect(megaCoverage.name).to.equal("Mega Coverage")
        });
      });
});