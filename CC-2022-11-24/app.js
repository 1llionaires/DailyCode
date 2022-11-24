// Task
// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).

// Notes:
// Only positive integers will be passed to the function (> 0 ), no negatives or zeros.
// Input >> Output Examples
// minValue ({1, 3, 1})  ==> return (13)
// Explanation:
// (13) is the minimum number could be formed from {1, 3, 1} , Without duplications

// minValue({5, 7, 5, 9, 7})  ==> return (579)
// Explanation:
// (579) is the minimum number could be formed from {5, 7, 5, 9, 7} , Without duplications

// minValue({1, 9, 3, 1, 7, 4, 6, 6, 7}) return  ==> (134679)
// Explanation:
// (134679) is the minimum number could be formed from {1, 9, 3, 1, 7, 4, 6, 6, 7} , Without duplications

//array of integers, never empty, no letters or special char, no negatives, will be duplicate integers
//return a combination of numbers with the lowest value and unique integers 

// function minValue(values){
//     //get rid of dupes with new Set()
//     //sort the array in ascending order and join the array and covert str into number
//     return Number([...new Set(values)].sort((a,b)=>a+b).join(''))
// }

const minvalue = values => Number([...new Set(values)].sort((a,b)=>a+b).join(''))

console.log(minValue([1, 3, 1]),13)
console.log(minValue([6, 7, 8, 7, 6, 6]),678)
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789)