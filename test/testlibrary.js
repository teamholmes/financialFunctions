
var assert = require("assert");
//var expectChai = require("chai");
var calcEngine = require("../lib/calculatorEngine.js");


describe('Calculator', function() {

	beforeEach(function() {
	// do nothing
  });

  function throwError() {
    console.log("-----" + testCalculator.errorCode_01);
    throw new Error(testCalculator.errorCode_01);
}

  describe('Internal Rate of Return', function () {
    it('Should return the correct rate of return for IRR(900,0.1,3)', function () {
      var testCalculator = new calcEngine();
      assert.equal(676.1833208114198, testCalculator.IRR(900,0.1,3));
    });

    it('Should throw error when 1 argument is missing', function () {
      var testCalculator = new calcEngine();
      //expect(testCalculator.IRR(900)).to.throw(Error);
      //chai.expect(throwError).to.throw(new Error(testCalculator.errorCode_01));
    });

    it('Should throw error when no arguments are entered', function () {
      var testCalculator = new calcEngine();
      testCalculator.IRR();
      assert.throw(throwError, Error, testCalculator.errorCode_01);
    });

  });
});
