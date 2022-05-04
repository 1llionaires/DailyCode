// Find Mean
// Find the mean (average) of a list of numbers in an array.

// Information
// To find the mean (average) of a set of numbers add all of the numbers together and divide by the number of values in the list.

//P: array of nums
//R: find the mean/avg of array
//E: given [1, 3, 5, 7], result 4
//   given [1], result 1
//   given [3,3,3], result 3
//PC: create a function that finds the mean by using a loop to add elements in array and divide by length
var findAverage = function (nums) {
    let total = 0
    for(let i=0;i<nums.length;i++){
      total += nums[i]
    }
    return total/nums.length
}