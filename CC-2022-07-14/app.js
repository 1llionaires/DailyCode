// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

//P: array of nums
//R: check if the largest value in the array is less than the limit
//E: given ([66, 101], 200), results true
//   given ([78, 117, 110, 99, 104, 117, 107, 115], 100), results false
//   given ([101, 45, 75, 105, 99, 107], 107), results true
//PC: create a function that finds the maximum value in the array and compares it to the limit
function smallEnough(a, limit){
    return Math.max(...a) <= limit
}