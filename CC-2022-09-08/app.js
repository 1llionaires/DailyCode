
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

//P: array and number
//R: return an array containing the number of even elements specified in the parameters
//E: given ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3), results [4, 6, 8]
//   given ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2), results [-8, 26]
//   given ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1), results [6]
//PC: create a function that filters out even integers and slice the array by negative number
function evenNumbers(array, number) {
    return array.filter(a => a % 2 ===0).slice(-number);
}