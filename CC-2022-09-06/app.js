// Be Concise IV - Index of an element in an array
// Task
// Provided is a function find which accepts two parameters in the following order: array, element and returns the index of the element if found and "Not found" otherwise. Your task is to shorten the code as much as possible in order to meet the strict character count requirements of the Kata. (no more than 85) You may assume that all array elements are unique.

//P: arr, element
//R: return the index of the element that matches the element in the array
//E: given [2,3,5,7,11], 5, results 2
//   given [2,3,5,7,11], 11, results 4
//   given [2,3,5,7,11], 3, results 1
//PC: create a function that returns the index of the array where the element is equal to the array 
//    if no values are equal return "not found"
function find(arr, el) {
    return arr.indexOf(el)>=0?arr.indexOf(el):"Not found"
}