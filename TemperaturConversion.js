/**
 * Purpose: To convert Temperature from Fahrenheit to Celsius vice versa.
 * 
 * @author Madhuri Patil
 *
 */
var readline = require('readline');

var read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
 * Function to convert Temperature
 * 
 * @param choice contains choice to Convert temperature from Fahrenheit to Celsius or vice versa
 */
function temperature() {
    console.log("Menu ");
    console.log("1. Convert Fahrenheit to Celsius : ");
    console.log("2. Convert Celsius to Fahrenheit : ");
    read.question("Enter Choice : ",(choice) => {
        if(choice) {
            if(choice == 1) {
                /*
                 * Function to convewr temperature Fahrenheit to Celsius. 
                 * @param tempFah contains temperature value in Fahrenheit
                 */ 
                read.question("Enter temperature in  Fahrenheit : ",(tempFah) => {
                    var fahToCel = (tempFah - 32) * 5/9;
                    console.log("Fahrenheit to Celsius : "+fahToCel);
                });
            } else if(choice == 2) {
                /*
                 * Function to convewr temperature Celsius to Fahrenheit.
                 * @param tempFah contains temperature value in Fahrenheit
                 */ 
                read.question("Enter temperature in Celsius : ",(tempCel) => {
                    var celToFah = (tempCel * 9/5) + 32;
                    console.log("Celsius to Fahrenheit : "+celToFah);
                });
            }
        }
    }) 
}

temperature();
