// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

// getAverage([2,2,2,2]),2)
// getAverage([1,2,3,4,5,]),3);
// getAverage([1,1,1,1,1,1,1,2]),1)

//array of numbers no letters or special char, no empty array
//return the average of array elements
//create a function that reduces the array and divides by length 
//return the floor of the average to round down to nearest int
// function getAverage(arr){
//     return Math.floor(arr.reduce((a,b)=>a+b)/arr.length)
// }

const getAverage = arr =>  Math.floor(arr.reduce((a,b)=>a+b)/arr.length)

console.log(getAverage([2,2,2,2]),2)
console.log(getAverage([1,2,3,4,5,]),3)
console.log(getAverage([1,1,1,1,1,1,1,2]),1)