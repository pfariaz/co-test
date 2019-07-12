const expect = require('chai').expect;
const FullCoverage = require('../src/model/Products/FullCoverage');

describe('FullCoverage model', function() {
    describe("constructor", function() {
        it("should have 'Full Coverage' as name", function() {
          const fullCoverage = new FullCoverage(10, 20)   
          expect(fullCoverage.name).to.equal("Full Coverage")
        });
      });
});