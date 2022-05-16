// You get an array of numbers, return the sum of all of the positives ones.
// Note: if there is nothing to sum, the sum is default to 0.

//P: array of integers
//R: sum all positive elements of the array
//E: given [1,2,3,4,5], result 15
//   given [1,-2,3,4,5], result 13
//   given [-1,-2,-3,-4,-5], result 0
//PC: create a function that sums all positive elem in the array
function positiveSum(arr) {
    return arr
      .filter(num => num > 0)
      .reduce((a, b) => a + b, 0);
}