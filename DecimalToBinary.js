/**
 * Purpose: To print the binary (base 2) representation of the decimal number
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
 * Function that outputs the binary (base 2) representation of the decimal number
 * 
 * @param decimal contains decimal value to convert into binary.
 */
function decimalToBinary() {
    read.question("Enter decimal number : ",(decimal) => {
        var binary = common.toBinary(decimal);
        console.log("Decimal To Binary : "+binary);
        read.close();
    });
}

decimalToBinary();