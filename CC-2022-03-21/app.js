// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//P: integer
//R: return 'Even' or 'Odd' for the given integer
//E: given 1, result 'Odd'
//   given 2, result 'Even'
//   given 333, result 'Odd'
//PC: create a function with a conditional to check whether integer is odd or even
function even_or_odd(number) {
    return number % 2 ? "Odd" : "Even"
}