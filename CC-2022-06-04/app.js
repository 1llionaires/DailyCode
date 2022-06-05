// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

//P: array of integers
//R: return sum of lowest two integers in the array
//E: given [19, 5, 42, 2, 77], result 7
//   given [10, 343445353, 3453445, 3453545353453], result 3453455
//   given ([15, 28, 4, 2, 43]), result 6
//PC: create a function that sorts array in ascending order and sums two lowest integers
function sumTwoSmallestNumbers(numbers) {  
    numbers.sort((a,b)=>a-b)
    return numbers[0]+numbers[1]
}