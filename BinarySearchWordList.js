
/**
 * Purpose: Binary Search the Word from Word List.
 * 
 * @author Madhuri Patil
 *
 */
var fs = require('fs');
const readline = require('readline');
var common = require('./utility.js');
const read = readline.createInterface(process.stdin, process.stdout);

/*
 * Function to search word from word list
 * 
 * @param ab.txt contains file name to read words.
 * @param 'utf' contains encoding characters.
 * @param function(err,contents) contains callback. 
 */
function binarySearchWordList() {
    fs.readFile('ab.txt', 'utf8', function(err, contents) {
        var array = []; 
        /*
         * split file contents using " " delemiter.
         */
        array = contents.split(" ");
        console.log("File Contents : "+array);
        /*
         * Sort array elements
         */
        array.sort();
        console.log("Sorted Array : "+array);
        read.question("Enter word to search from list : ",(key) => {
            /*
             * Function to perform binary search for word.
             * prints the position of element if found.
             * 
             */
            var position = common.binarySearchString(array,key,array.length);
            if(position == -1)
                console.log(key+" is not found in a file");
            else
                console.log(key+" is found at "+(position+1)+" position");
            read.close();
        });
    });
}

binarySearchWordList();