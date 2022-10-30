// Given a sequence of numbers, find the largest pair sum in the sequence.

// For example

// [10, 14, 2, 23, 19] -->  42 (= 23 + 19)
// [99, 2, 2, 23, 19]  --> 122 (= 99 + 23)
// Input sequence contains minimum two elements and every element is an integer.

//array of integers, never empty at least 2 elements, no letters or special char, no funny biz
//return the sum of the two largest integers in the array

console.log(largestPairSum([10, 14, 2, 23, 19]), 42)
console.log(largestPairSum([99, 2, 2, 23, 19], 122))
console.log(largestPairSum([-10, -8, -16, -18, -19], -18))

//create a function that sorts the array in ascending order
//slice the array to leave the last  two elements
//reduce the array and return the result

// function largestPairSum(arr){
//     return arr.sort((a,b)=>a-b).slice(-2).reduce((a,c)=>a+c,0)
// }

const largestPairSum = (arr) => arr.sort((a,b)=>a-b).slice(-2).reduce((a,c)=>a+c,0)
