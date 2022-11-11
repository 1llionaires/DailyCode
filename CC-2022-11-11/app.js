// We want an array, but not just any old array, an array with contents!

// Write a function that produces an array with the numbers 0 to N-1 in it.

// For example, the following code will result in an array containing the numbers 0 to 4:

// arr(5) // => [0,1,2,3,4]

//integer
//return an array consisting of numbers from 0-N in ascending order
//create a function that creates a new array that goes from 0-N using array method from

const arr = n => Array.from({length: n}, (_, i) => i);

console.log(arr(5),[0,1,2,3,4,5])
console.log(arr(3),[0,1,2,3])
