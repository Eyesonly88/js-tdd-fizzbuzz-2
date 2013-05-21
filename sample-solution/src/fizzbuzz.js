YUI.add('fizzbuzz', function(Y){
	"use strict";
	Y.FizzBuzz = {
		numbers : [],
		isDivisibleByThree: function (number) {
			if (number % 3 === 0) {
				return true;
			}
			return false;
		},
		isDivisibleByFive: function (number) {
			if (number % 5 === 0) {
				return true;
			}
			return false;
		},
		isDivisibleByFiveAndThree: function (number) {
			if (this.isDivisibleByFive(number) && this.isDivisibleByThree(number)) {
				return true;
			}
			return false;
		},
		getNumbers: function () {
			return this.createNumbers();
		},
		createNumbers: function () {
			for (var i=0; i<100 ; i++) {
				if(this.isDivisibleByFiveAndThree(i+1)) {
					this.numbers[i] = 'FizzBuzz';
				} else if (this.isDivisibleByThree(i+1)) {
					this.numbers[i] = 'Fizz';
				} else if (this.isDivisibleByFive(i+1)) {
					this.numbers[i] = 'Buzz';
				} else {
					this.numbers[i] = i+1;
				}
			}
			return this.numbers;
		}
   };
});