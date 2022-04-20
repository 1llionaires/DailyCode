// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

//P: array
//R: invert postive to negative numbers and vice versa
//E: given [1,2,3,4,5], result [-1,-2,-3,-4,-5]
//   given [1,-2,3,-4,5], result [-1,2,-3,4,-5]
//   given [], result []
//PC: create a function that inverts array
const invert = array => array.map(num=>-num)