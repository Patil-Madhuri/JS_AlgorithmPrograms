/**
 * Purpose: Insertion sort function
 * 
 * @author Madhuri Patil
 *
 */
var common = require('./utility.js');

var readline = require('readline');

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
 * @param choice contains choice to perform sorting for Integer or String.
 * @param element contains elements to push into array.
 */
function askArrayElements() {
    if(arrayElements.length == arraySize) {
        console.log("Menu : ");
        console.log("1. insertionSort method for integer");
        console.log("2. insertionSort method for String");
        read.question("Enter Choice : ",(choice) => {
            if(choice == 1) {
                /*
                 * Function to perform insertion sort for Integer.
                 * prints the sorted array.
                 * 
                 */
                var array1 = common.insertionSortInteger(arrayElements,arraySize);
                console.log("Sorted Insertion Sort Array : ");
                for(var index=0;index<arraySize;index++)
                    console.log(array1[index]);
            } else if(choice == 2) {
                /*
                 * Function to perform insertion sort for Integer.
                 * prints the sorted array.
                 * 
                 */
                var array1 = common.insertionSortString(arrayElements,arraySize);
		        console.log("Sorted Insertion Sort Array : ");
                for(var index=0;index<arraySize;index++)
                console.log(array1[index]);
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