// SpeedCode #2 - Array Madness
// Objective
// Given two integer arrays a, b, both of length >= 1, create a program that returns true if the sum of the squares of each element in a is strictly greater than the sum of the cubes of each element in b

//P: array a and array b
//R: return a boolean for if sum of squares of array a is greater than sum of cubes of array b
//E: given [1,2,3] and [4,5,6], results false
//   given [5,6,7] and [4,5,6], results false
//   given [5,3,2,4,1] and [15], results false
//PC: create a function that returns a boolean after comparing the reduced value of a squared array a to cubed array b
function arrayMadness(a, b) {
    return a.reduce((a,b)=>a+(b**2),0)>b.reduce((a,b)=>a+(b**3),0)
}