/**
 * Purpose: Take a range of 0 - 1000 Numbers and find the Prime numbers in that range. 
 * 
 * @author Madhuri Patil
 *
 */
var readline = require('readline');
var common = require('./utility.js');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to replace string by given name.
 * 
 * @param range contains range to print prime numbers.
 */
function primeNumbers() {
    read.question("Enter range between 1-1000 : ",(range) => {
        for(var index=2;index<range;index++){
			prime = common.checkPrime(index);
			if(prime == true)
				console.log(index);
		}
    });
}

primeNumbers();