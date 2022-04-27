// Your task is to create the functionisDivideBy (or is_divide_by) to check if an integer number is divisible by both integers a and b.

//P: number, a ,b
//R: check if number is divisible by a and b
//E: given (-12, 2, -6), result true
//   given (-12, 2, -5), result false
//   given (45, 1, 6), result false
//PC: create a function with a conditional to check if number is divisible by both a and b
function isDivideBy(number, a, b) {
    return number % a === 0 && number  % b === 0 ? true : false;
}