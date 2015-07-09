module.exports = function() {

	this.errorCode_01 = "Error";

	this.IRR = function(futureValue, interestRate, term) {
		if (!correctArguments.apply(this,arguments)) {
			throw new Error(this.errorCode_01);
		}

		return futureValue /  Math.pow(1 + interestRate,term);

	};

	function correctArguments() {
		if (!arguments || arguments.length < 3) {
			return false;
		}
		return true;
	}
};