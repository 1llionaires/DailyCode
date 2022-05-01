// Given the triangle of consecutive odd numbers:

//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

//P: numbers
//R: find the sum of odd numbers to the nth integer
//E: given 1, result 1
//   given 2, result  8
//   given 42, result 74088
//PC: create a function that adds all odd numbers to nth integer
function rowSumOddNumbers(n) {
    return Math.pow(n,3)
}