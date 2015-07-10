
//var assert = require("assert");
var chai = require("chai");
var calcEngine = require("../lib/calculatorEngine.js");
var expect = chai.expect;
var assert = chai.assert;


describe('Calculator', function() {

        var testCalculator = new calcEngine();

	beforeEach(function() {
	// do nothing
  });

  function throwError() {
    console.log("-----" + testCalculator.errorCode_01);
    throw new Error(testCalculator.errorCode_01);
}

  describe('Internal Rate of Return', function () {
    it('Should return the correct rate of return for IRR(900,0.1,3)', function () {
    expect(testCalculator.IRR(900,0.1,3)).to.equal(676.1833208114198);
    });

    it('Should throw an error when incorrect number of arguments supplied', function () {
       var oneArgument = function() {
        var testCalculator = new calcEngine();
        return estCalculator.IRR(900);
      };

      expect(oneArgument).to.Throw(Error);

        var noArguments = function() {
        var testCalculator = new calcEngine();
        return estCalculator.IRR();
      };

      expect(noArguments).to.Throw(Error);

    });

  });
});
