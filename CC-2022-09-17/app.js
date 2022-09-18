// Task
// Given an array of integers , Find the maximum product obtained from multiplying 2 adjacent numbers in the array.

// Notes
// Array/list size is at least 2.

// Array/list numbers could be a mixture of positives, negatives also zeroes .

//P: array of integers
//R: return the largest product between two adjacent integers in the array
//E: given [1, 2, 3], results 6
//   given [9, 5, 10, 2, 24, -1, -48], results 50
//   given [-23, 4, -5, 99, -27, 329, -2, 7, -921], results -14
//PC: create a function with an empty array variable
//    the loop through the array of integers and push arr[i]*arr[i+1] to empty array
//    return Math.max of the result array

function adjacentElementsProduct(array) {
    let result = []
    for (let i=0; i<array.length-1; i++){
     result.push(array[i] * array[i+1])
     }
     return Math.max(...result)      
}