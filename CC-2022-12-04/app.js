// My grandfather always predicted how old people would get, and right before he passed away he revealed his secret!

// In honor of my grandfather's memory we will write a function using his formula!

// Take a list of ages when each of your great-grandparent died.
// Multiply each number by itself.
// Add them all together.
// Take the square root of the result.
// Divide by two.
// Example
// predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86
// Note: the result should be rounded down to the nearest integer.

// Some random tests might fail due to a bug in the JavaScript implementation. Simply resubmit if that happens to you.

//8 different ages, no letters, no negatives, no special char, no funny biz
//create an algorithm to predict the age someone may die


function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    //create an array with the given ages
    //create an algorithm mulitply each num to itself -> reduce -> sqrt -> /2 -> round down to nearest int
    let arr = [age1,age2,age3,age4,age5,age6,age7,age8]
    return Math.floor(Math.sqrt(arr.map(el=>el*el).reduce((a,c)=>a+c))/2)
  }


console.log(predictAge(65,60,75,55,60,63,64,45),86)