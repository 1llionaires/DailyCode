// Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]


//array of integers, no empty arrays, no letters or special char, always has at least num in the array, no floated values, positive and negative numbers, no funny biz
//return the number of even integers from the end of the array
//[2,4], 2
//create a function that filters out the even numbers in the array
//slice the array from the end of the array to number parameter
//return array with number of even integers from original array

// function evenNumbers(array, number) {
//     return array.filter((n)=>n%2===0).slice(-number)
// }

const evenNumbers = (array, number) => array.filter((n)=>n%2===0).slice(-number)

console.log(evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3),[4, 6, 8])
console.log(evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26],2),[-8, 26])
console.log(evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1),[6])