// Return the type of the sum of the two arguments

//can be a number, string or empty, no special char, no funny biz
//return the typeof the sum whether it is a number or a string or undefined

console.log(typeOfSum(12, 1),'number')
console.log(typeOfSum('d', 1),'string')

// function typeOfSum(a,b){
//     //find the sum
//     let sum = a + b 
//     //find the typeof the sum
//     return typeof sum
// }

const typeOfSum = (a,b) => typeof (a+b)