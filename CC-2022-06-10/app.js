// The museum of incredible dull things
// The museum of incredible dull things wants to get rid of some exhibitions. Miriam, the interior architect, comes up with a plan to remove the most boring exhibitions. She gives them a rating, and then removes the one with the lowest rating.

// However, just as she finished rating all exhibitions, she's off to an important fair, so she asks you to write a program that tells her the ratings of the items after one removed the lowest one. Fair enough.

// Task
// Given an array of integers, remove the smallest value. Do not mutate the original array/list. If there are multiple elements with the same value, remove the one with a lower index. If you get an empty array/list, return an empty array/list.

// Don't change the order of the elements that are left.

//P: array of integers
//R: remove the first lowest value in the array without changing the order
//E: given [1,2,3,4,5], result [2,3,4,5]
//   given [5,3,2,1,4], result [5,3,2,4]
//   given [2,2,1,2,1], result [2,2,2,1]
//PC: make a copy of the original array without mutation 
//find the smallest value in the array 
//Remove the smallest element in the array 
//Return the array without the smallest element
function removeSmallest(numbers) {
    const copy = numbers.slice(0)
    let smallestNumber = numbers.indexOf(Math.min(...numbers))
    copy.splice(smallestNumber,1)
    return copy
}