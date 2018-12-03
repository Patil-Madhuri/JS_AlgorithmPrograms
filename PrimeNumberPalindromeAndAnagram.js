
/**
 * Purpose: To find the prime numbers that are Anagram and Palindrome 
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
 * Function to find the prime numbers that are Anagram and Palindrome 
 * 
 * @param range  contains value to find the prime numbers that are Anagram and Palindrome
 */
function palPrimes() {
    read.question("Enter range from 1-1000 : ",(range) => {
        console.log("Prime and Palindrome numbers : ");
		for(var index=2;index<range;index++){
			if(common.checkPrime(index) && common.isPalindrome(index)) {
				console.log(index);
			}
        }
    read.close();
    });
}

palPrimes();