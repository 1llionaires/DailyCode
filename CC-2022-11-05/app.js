// Complete the function that takes a sequence of numbers as single parameter. Your function must return the sum of the even values of this sequence.

// Only numbers without decimals like 4 or 4.0 can be even.

// The input is a sequence of numbers: integers and/or floats.

//array of integers, no letters, can be empty, no special char, no funny biz
//return the sum of even integers in the array and return 0 if the array is empty
//create a function that filters the array for even numbers and then reduce the array to get the sum

// function addEvens(arr){
//     return arr.filter(n=>n%2===0).reduce((a,c)=>a+c,0)
// }

const addEvens = arr => arr.filter(n=>n%2===0).reduce((a,c)=>a+c,0)

console.log(sumEvens([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),30)
console.log(sumEvens([]),0)
console.log(sumEvens([1,2,3]),6)