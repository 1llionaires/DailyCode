// In this Kata, you will be given an array of arrays and your task will be to return the number of unique arrays that can be formed by picking exactly one element from each subarray.

// For example: solve([[1,2],[4],[5,6]]) = 4, because it results in only 4 possibilites. They are [1,4,5],[1,4,6],[2,4,5],[2,4,6].

// Make sure that you don't count duplicates; for example solve([[1,2],[4,4],[5,6,6]]) = 4, since the extra outcomes are just duplicates.

//solve([[1,2],[4],[5,6]]),4)
//solve([[1,2],[4,4],[5,6,6]]),4)
//solve([[1,2],[3,4],[5,6]]),8)
//solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

//array of arrays, always numbers, no funny biz, subarrays may have duplicates that need to be removed
//return a number that is the unique number of combinations of subarrays


console.log(solve([[1,2],[4],[5,6]]),4)
console.log(solve([[1,2],[4,4],[5,6,6]]),4)
console.log(solve([[1,2,3],[3,4,6,6,7],[8,9,10,12,5,6]]),72)

// function solve(arr){
//     //find unique number of elements using set(unique values)
//     //map [1,2],[4,4],[5,6,6] -> 2,1,2
//     //reduce
//     return arr.map(sa=>new Set(sa).size).reduce((a,c)=>a*c,1)
// }

const solve = (arr) => arr.reduce((a,c)=>a*new Set(c).size,1)