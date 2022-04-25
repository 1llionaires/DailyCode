// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

//P: array of num
//R: convert string to integer and sum elements of array
//E: given [9,3,'7','3'], result 22
//   given ['5','0',9,3,2,1,'9',6,7], result 42
//   given ['3', 6, 6, 0, '5', 8, 5, '6', 2,'0'], result 41
//PC: create a function that takes in array and convert string elements into integers
//    sum elements of array and return the sum
function sumMix(x){
    let sum = 0
    for (let i=0; i<x.length; i++){
     sum += parseInt(x[i])
    }
    return sum
  }