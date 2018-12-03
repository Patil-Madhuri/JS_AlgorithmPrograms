/**
 * Purpose: To find the Fewest Notes to be returned for Vending Machine
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

var index=0;
var notes = [1000,500,100,50,10,5,2,1];

/*
 * Function to find the Fewest Notes to be returned for Vending Machine.
 * 
 * @param money contains money to change.
 */
function vendingMachine() {
    read.question("Enter amount to change : ",(money) => {
        common.calculateMoney(notes,money,index);
        read.close();
    });
}

vendingMachine();
