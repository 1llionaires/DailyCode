// Find the number with the most digits.

// If two numbers in the argument array have the same number of digits, return the first one in the array.

//P: array of numbers
//R: return the element with the most digits in the array
//E: given [1, 10, 100], results 100
//   given [9000, 8, 800], results 9000
//   given [8, 900, 500], results 900
//PC: create a function to reduce the array to find the number with the most digits
function findLongest(array){
    return array.reduce((a,b)=>`${b}`.length>`${a}`.length? b:a)
}