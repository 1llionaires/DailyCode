// Your task is to create a function that does four basic mathematical operations.
// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//P: (operation, val1, val2)
//R: return result of the operation
//E: given ('+', 4, 7), result 11
//   given ('-', 15, 18), result -3
//   given ('*', 5, 5), result 25
//PC: create a function with conditionals to check for operation and return correct answer
function basicOp(operation, value1, value2){
    if (operation === '+') {
      return value1 + value2;
    } else if (operation === '-') {
      return value1 - value2;
    } else if (operation === "*") {
      return value1 * value2;
    } else if (operation === "/") {
      return value1 / value2;
    }
}