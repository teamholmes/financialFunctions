
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
    throw new Error(testCalculator.errorCode_01);
  }

  describe('Internal Rate of Return', function () {
    it('Should return the correct rate of return for IRR(900,0.1,3)', function () {
    expect(testCalculator.IRR(900,0.1,3)).to.equal(676.1833208114198);
    });

    it('Should throw an error when incorrect number of arguments supplied', function () {
       var oneArgument = function() {
        var testCalculator = new calcEngine();
        return testCalculator.IRR(900);
      };

      expect(oneArgument).to.Throw(testCalculator.errorCode_01);

        var noArguments = function() {
        var testCalculator = new calcEngine();
        return testCalculator.IRR();
      };

      expect(noArguments).to.Throw(testCalculator.errorCode_01);

    });

  });
});
