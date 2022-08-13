// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

//P: number
//R: return the sum of the individual digits in the number continually if number is greater than 9
//E: given 16, results 1 + 6 = 7
//   given 942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//   given 132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//PC: create a function with a boolean if n<10 return n else turn number into array with each element containing a digit
//    map the number and reduce it until the result is a single digit
function digital_root(n) {
    return n<10?n:digital_root(Array.from(n.toString().split('')).map(Number).reduce((a,b)=>a+b,0));
}