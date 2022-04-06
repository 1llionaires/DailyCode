// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

// P: Is it always integers? Are there special characters? An empty arr?
// R: Return a new arr with each value doubled
// E: Given [2,3,4], should return [4,6,8]
//    Given [4,5,6], should return [8,10,12]
//    Given [2,22], should return [4,44]
// PC: Create a function that takes in an arr
function doubleArray(arr){
    return arr.map(num=>num*2)
}
//     Map through the array, multiply each element by 2 and return