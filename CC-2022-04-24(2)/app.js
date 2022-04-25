// Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. 

// If the array does not contain any numbers then you should return 0.

// Assumptions
// You can assume that you are only given numbers.
// You cannot assume the size of the array.
// You can assume that you do get an array and if the array is empty, return 0.

//P: array of numbers
//R: sum elements of array
//E: given [1, 5.2, 4, 0, -1], result 9.2
//   given [], result 0
//   given [-2.398], result -2.398
//PC: create a function that takes in array of numbers and sums them
function sum (numbers) {
    "use strict";
  let add = 0
  for (let i=0;i<numbers.length;i++){
      add += numbers[i]
    }
  return add  
};

//OR 

function sum(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
}
