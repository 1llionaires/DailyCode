// Implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// arrayDiff([1,2],[1]) == [2]
// If a value is present in b, all of its occurrences must be removed from the other:

// arrayDiff([1,2,2,2,3],[2]) == [1,3]

// arrayDiff([], [4,5]), [], "a was [], b was [4,5]"

// arrayDiff([3,4], [3]), [4], "a was [3,4], b was [3]"

// arrayDiff([1,8,2], []), [1,8,2], "a was [1,8,2], b was []"

//two array of numbers, no letters, no special char, can be empty, no funny biz
//return a new array where duplicates between both arrays are deleted
//create a function that filters out duplicates from the first array

// function arrayDiff (a,b){
//     return a.filter(el=> !b.includes(el))
// }

const arrayDiff = (a,b) => a.filter(el=> !b.includes(el))

console.log(arrayDiff([1,2,2,2,3],[2]),[1,3])
console.log(arrayDiff([1,2],[1]),[2])
console.log(arrayDiff([], [4,5]),[])