// Complete the square sum function so that it squares each number passed into it and then sums the results together.

// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.

//P: array of numbers
//R: return the numbers squared and summed together
//E: given [1,2,3], result 9
//   given [0], result 0
//   given [0,3,4,5], result 50
//PC: create a function that squares the array elements
//    return the sum of the elements
function squareSum(numbers){
    let arr = []
    let val = 0
    for(let i=0;i<numbers.length;i++){
      arr.push(numbers[i]*numbers[i])
    }return arr.reduce((sum, a) => sum + a, 0)
}

//OR

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
}