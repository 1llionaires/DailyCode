// JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

//P: array
//R: using the array filter method return only even integers 
//E: given [2,3,4,6], results [2,4,6]
//   given [1,15,2,22], results [2,22]
//   given [10,11,12,14], results [10,12,14]
//PC: create a function using array filter method to filter out odd numbers in the array and return evens only
function getEvenNumbers(arr) {
    return arr.filter(a => a % 2 === 0);
}