/**
 * Purpose: Question to find your number.
 * 
 * @author Madhuri Patil
 *
 */

var utility = require('./utility.js');
var val = process.argv[2];
//to take command line argument
if (val < 0 || isNaN(val)) {
    console.log('please enter valid value');
    process.exit();
}
console.log('\n\nthink of a number between 0 and ' + val);
console.log('\n follow the instruction of the game\n\n');
utility.findNum(val);
