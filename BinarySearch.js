/**
 * Purpose: Binary Search word.
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

var arraySize;
var arrayElements = [];

/*
 * Function to take array size.
 * 
 * @param size contains size of array.
 */
function askArraySize() {
    read.question("Enter size of array : ",(size) => {
        arraySize = size;
        for(var index=0;index<size;index++) {
            askArrayElements();
        }
    });
}

/*
 * Function to take array elements.
 * 
 * @param choice contains choice to perform searching for Integer or String.
 * @param element contains elements to push into array.
 */
function askArrayElements() {
    if(arrayElements.length == arraySize) {
        console.log("Menu : ");
        console.log("1. binarySearch method for integer");
        console.log("2. binarySearch method for String");
        read.question("Enter Choice : ",(choice) => {
            if(choice ==1) {
                read.question("Enter element to search : ",(element) => {
                    /*
                     * Function to perform binary search for Integer.
                     * prints the position of element if found.
                     * 
                     */
                    var pos = common.binarySearchInteger(arrayElements,element,arrayElements.length);
                    if(pos == -1) 
                        console.log(element+" is not found in a file");
                    else
                        console.log(element+" is found at "+(pos+1)+" position");
                });
            } else if(choice == 2) {
                read.question("Enter element to search : ",(element) => {
                    /*
                     * Function to perform binary search for String.
                     * prints the position of element if found.
                     * 
                     */
                    var pos = common.binarySearchString(arrayElements,element,arrayElements.length);
                    if(pos == -1) 
                        console.log(element+" is not found in a file");
                    else
                        console.log(element+" is found at "+(pos+1)+" position");
                });
            }
        })
    } else {
        read.question(`Please enter the ${(arrayElements.length + 1)} element : `, (element) => {
            arrayElements.push(element);       
            askArrayElements();
        });
    }
}

askArraySize();

		