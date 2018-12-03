/**
 * Purpose: To calculate monthly payment
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
 * Function to calculate monthly payment
 * 
 * @param principal
 * @param year
 * @param rateInterest
 * 
 */
function monthlyPayment() {
    read.question("Enter value of principal : ",(principal) => {
        read.question("Enter value of year : ",(year) => {
            read.question("Enter value of Rate of Interest : ",(rateInterest) => {
                payment = common.findMonthlyPayment(principal,year,rateInterest);
                console.log("Monthly Payment : "+payment);
            });
        });
    });
}

monthlyPayment();

