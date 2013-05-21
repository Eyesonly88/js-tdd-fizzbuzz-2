YUI.add('fizzbuzz-test', function(Y){
	"use strict";
	var Assert      = Y.Assert,
	ChaiAssert 		= window.chai.assert,
	Expect			= window.chai.expect,
    FizzBuzz 		= Y.FizzBuzz,
    suite;

	// -- Suite --------------------------------------------------------------------
	suite = new Y.Test.Suite('FizzBuzz Suite');

	// -- Add Test Cases to our Suite --------------------------------------------------------------------
	
	// -- Number Division Tests --------------------------------------------------------------------
	suite.add(new Y.Test.Case({

        name : "Number Division Tests",

		'Passing a number divisible by Three should return true' : function () {
			Assert.isTrue(FizzBuzz.isDivisibleByThree(3));
        },
		'Passing a number not divisible by Three should return false' : function () {
			Assert.isFalse(FizzBuzz.isDivisibleByThree(2));
        },
        'Passing a number divisible by Five should return true' : function () {
        	Expect(FizzBuzz.isDivisibleByFive(5)).to.be.true;
        },
        'Passing a number not divisible by Five should return false' : function () {
        	Expect(FizzBuzz.isDivisibleByFive(7)).to.be.false;
        },
        'Passing a number divisible by Five and Three should return true' : function () {
        	Expect(FizzBuzz.isDivisibleByFiveAndThree(15)).to.be.true;
        },
        'Passing a number not divisible by Five and Three should return false' : function () {
        	Expect(FizzBuzz.isDivisibleByFiveAndThree(17)).to.be.false;
        }

    }));

    // -- Number Counting Tests --------------------------------------------------------------------

    suite.add(new Y.Test.Case({

        name : "Number Counting Tests",

        setUp: function () {
        	this.numbers = FizzBuzz.getNumbers();
        },

        tearDown: function (){
        	delete this.numbers;
        },

        'Numbers counted should be 100 numbers' : function () {
			Assert.isArray(this.numbers);
			Assert.areEqual(100, this.numbers.length);
        },
        'The range of numbers should be from one to hundred' : function () {
			Assert.isArray(this.numbers);
			var numberRange = 1;
			for (var j=0; j<100 ; j++) {
				if (FizzBuzz.isDivisibleByThree(numberRange)){
					Assert.isString(this.numbers[j]);
				} else if (FizzBuzz.isDivisibleByFive(numberRange)) {
					Assert.isString(this.numbers[j]);
				} else {
					Assert.isNumber(this.numbers[j]);
					Assert.areEqual(numberRange, this.numbers[j]);
				}
				numberRange++;
			}
        }

    }));

    // -- Number Printing Tests --------------------------------------------------------------------

    suite.add(new Y.Test.Case({

        name : "Number Printing Tests",

        setUp: function () {
        	var numbers = FizzBuzz.getNumbers();
        	this.numbers = numbers;
			
			// save the original impl for console.log
			this.originalConsole = console.log;

			// stub the console.log method
			console.log = function(numbers) {
				var printedNumbers = [];
				for ( var item in numbers ) {
					printedNumbers.push(numbers[item]);
				}
				return printedNumbers;
			};
        },

        tearDown: function() {
        	delete this.numbers;
        	delete this.originalConsole;
        },

        'Numbers should be printed to console from one to hundred' : function () {
        	// print the numbers to the stub console.
			var printedNumbers = console.log(this.numbers);
			
			Expect(this.numbers).to.eql(printedNumbers);

			// restore original console.log behaviour.
			console.log = this.originalConsole;
        },
        'Numbers divisible by Three should be printed as Fizz instead of their actual number': function () {
			// print the numbers to the stub console.
			var printedNumbers = console.log(this.numbers);
			
			for (var num in printedNumbers) {
				var actualNum = +num +1;
				if(FizzBuzz.isDivisibleByThree(actualNum) && !FizzBuzz.isDivisibleByFiveAndThree(actualNum)) {
					Expect(printedNumbers[num]).to.be.equal('Fizz');
				}
			}

			// restore original console.log behaviour.
			console.log = this.originalConsole;
        },
         'Numbers divisible by Five should be printed as Buzz instead of their actual number': function () {
        	// print the numbers to the stub console.
			var printedNumbers = console.log(this.numbers);
			
			for (var num in printedNumbers) {
				var actualNum = +num +1;
				if(FizzBuzz.isDivisibleByFive(actualNum) && !FizzBuzz.isDivisibleByFiveAndThree(actualNum)) {
					Expect(printedNumbers[num]).to.be.equal('Buzz');
				}
			}

			// restore original console.log behaviour.
			console.log = this.originalConsole;
        },
        'Numbers divisible by Five and Three should be printed as FizzBuzz instead of their actual number': function () {
        	// print the numbers to the stub console.
			var printedNumbers = console.log(this.numbers);
			
			for (var num in printedNumbers) {
				if(FizzBuzz.isDivisibleByFiveAndThree(+num + 1)) {
					Expect(printedNumbers[num]).to.equal('FizzBuzz');
				}
			}

			// restore original console.log behaviour.
			console.log = this.originalConsole;
        }

    }));

	// -- Add our Suite to the Test Runner --------------------------------------------------------------------
	Y.Test.Runner.add(suite);

}, 0.1, {requires:['fizzbuzz']});