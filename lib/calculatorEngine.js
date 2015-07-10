module.exports = function() {

	this.errorCode_01 = "Error - you must supply 3 arguments, the future value, the interest rate and the term";

	// function that replicates the Internal rate of return financial calculation
	this.IRR = function(futureValue, interestRate, term) {
		if (!correctArguments.apply(this,arguments)) {
			throw new Error(this.errorCode_01);
		}

		return futureValue /  Math.pow(1 + interestRate,term);

	};

	this.getVATAmount = function(amount, vatRate) {
		return amount * vatRate;
	};

	this.AmountIncludingVAT = function(amount, vatRate) {
		var vatDue = this.getVATAmount(amount,vatRate);

		return amount + vatDue;
	}

	function correctArguments() {
		if (!arguments || arguments.length < 3) {
			return false;
		}
		return true;
	}
};