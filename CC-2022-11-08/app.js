// In this simple exercise, you will create a program that will take two lists of integers, a and b. Each list will consist of 3 positive integers above 0, representing the dimensions of cuboids a and b. You must find the difference of the cuboids' volumes regardless of which is bigger.

// For example, if the parameters passed are ([2, 2, 3], [5, 4, 1]), the volume of a is 12 and the volume of b is 20. Therefore, the function should return 8.

// Your function will be tested with pre-made examples as well as random ones.

// If you can, try writing it in one line of code.


//two array of 3 numbers each
//find the area of the cuboids and find the difference between the areas
//create a function with two variables to store the area
//use a boolean to check which area is larger and subtract the smaller number from larger number

// function findDifference(a, b) {
//     let areaA = a.reduce((a,c)=>a*c,1)
//     let areaB = b.reduce((a,c)=>a*c,1)
//     return areaA > areaB ? areaA - areaB : areaB - areaA
// }

// function findDifference(a, b) {
//     return Math.abs(a.reduce((a,c)=>a*c)-b.reduce((a,c)=>a*c))
//   }

const findDifference = (a,b) => Math.abs(a.reduce((a,c)=>a*c)-b.reduce((a,c)=>a*c))

console.log(findDifference([3, 2, 5], [1, 4, 4]),14)
console.log(findDifference([9, 7, 2], [5, 2, 2]),106)
console.log(findDifference([11, 2, 5], [1, 10, 8]),30)