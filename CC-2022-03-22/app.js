// In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?

//P: integer
//R: if the integer is positive return a negative, if its already negative return the number
//E: given 1, return -1
//   given -12, return -12
//   given 0.12 return -0.12
//PC: create a function that converts postive numbers to negative and returns the number if its already negative
function makeNegative(num) {
    return num > 0 ? -num : num;
}