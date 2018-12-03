/**
 * Purpose: To read an integer as an Input,
 * convert to Binary using toBinary function and perform swapping of nibbles.
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
 * Function to take decimal number to perform operations.
 * 
 * @param decimal contains value to convert into binary.
 */
function binary() {
    read.question("Enter decimal Number : ",(decimal) => {
        var binary = common.toBinary(decimal);
        console.log("Binary cionversion of decimal number : "+binary);
        /*
         * Function to perform swapping of nibbles.
         * 
         * @param binary contains binary value to perform swapping of nibbles.
         */
        var swap = common.swapNibbles(binary);
        console.log("Numer after swapping nibbles : "+swap);
        /*
         * Function to take binary number to convert into decimal number.
         * 
         * @param swap contains new binary number to convert into decimal.
         */
        var decimal = common.toDecimal(swap);
        console.log("New decimal Number is : "+decimal); 
        read.close();
    });
}

 binary();