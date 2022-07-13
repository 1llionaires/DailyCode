// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.

//P: number
//R: sum the abs value of each digit in the number
//E: given 10, results 1
//   given 99, results 18
//   given -32, results 5
//PC: create a function that gets the abs value of the number 
//    turn the number to string then split into array and reduce the array to add the digits
function sumDigits(number) {
    return Math.abs(number).toString().split('').reduce(function(a,b){return +a + +b}, 0);
}