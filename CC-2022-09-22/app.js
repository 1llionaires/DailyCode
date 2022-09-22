// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//P: array of integers
//R: return a new array with only even integers in the same order as they were given
//E: given [0,1], results 0
//   given [], results 0
//   given [0,1,2,3,4], results [0,2,4]
//PC: create a function that filters out odd numbers
function noOdds( values ){
    return values.filter(x=>x%2==0)
}