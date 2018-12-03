var r1=require('readline');
var utility=require('./utility.js');
var prompts=r1.createInterface(process.stdin,process.stdout);

function anagram()
{
    prompts.question('enter the 1st string-->',function(item1){

        prompts.question('enter the 2nd string-->',function(item2){
            if(isNaN(item1) && isNaN(item2))
            {
                var val1=item1.toUpperCase();
                 var val2=item2.toUpperCase();
                 utility.anagram(val1,val2);
            }
            else
            console.log('enter string value only!!!!')
            process.exit();
        })


    })

}
anagram();