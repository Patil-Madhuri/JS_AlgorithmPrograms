/**
 * Purpose: To compute the square root of a nonnegative number
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
 * Function to compute the square root of a nonnegative number
 * 
 * @param number contains value to fins square root.
 */
function sqrtNonNegative(){
    read.question("Enter value of non-negative number : ",(number) => {
        var result = common.sqrtOfNumber(number);
        console.log("Value of Sqrt : "+result);
        read.close();
    });
}

sqrtNonNegative();
