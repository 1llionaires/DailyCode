// Unfinished Loop - Bug Fixing #1
// Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

//numbers only no funny biz
//return array starting from 1 to number
//given 3, result [1,2,3]
//given 5, result [1,2,3,4,5]
//create an array variable and loop through the number to add numbers 1 - parameter


function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
  }

function createArray(number){
    let newArray = [];

    for(let counter = 1; i <= number; counter++){
       newArray.push(counter); 
    }

    return newArray;
    
  }