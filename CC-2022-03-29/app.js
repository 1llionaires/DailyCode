// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

//P: integers (n,x,y)
//R: return boolean if n is divisible by x and y
//E: given  n = 3, x = 1, y = 3, result true
//   given  n = 12, x = 2, y = 6, result true
//   given  n = 100, x = 5, y = 3, result false
//PC: create a function to check if n is divisible by x and y and return boolean
function isDivisible(n, x, y) {
    return n % x === 0 && n % y === 0
}
  