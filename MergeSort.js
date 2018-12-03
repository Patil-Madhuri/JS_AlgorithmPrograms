var readline = require('readline-sync');
var util=require('./utility.js');
 
 function mergesort()
   {
   var size= readline.question("enter the size of the array :");
   if(isNaN(size)===false && size>1)
      { var array=[];
       for(i=0;i<size;i++)
       {
        var a=readline.question(`enter the ${(i)} value-> `) 
        // if(isNaN(a)) console.log("invalid");
         array.push(a)   
        }
        util.mergesort(array);
       console.log("the sorted array:["+util.mergesort(array)+"]");
      } 
      else console.log("invalid");
      
   }
   mergesort();