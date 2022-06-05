// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: array of integers
//R: sum array of integers and determine if sum is odd or even
//E: given [0], result 'even'
//   given [0,1,4], result 'odd'
//   given [0,-1,-5], result 'even'
//PC: create a function that reduces array and checks if sum is odd or even
function oddOrEven(array) {
    let sum = array.reduce((a,b)=>a+b,0)
    return sum%2!=0?'odd':'even'
}

//OR

function oddOrEven(arr) {
    return arr.reduce((a,b)=>a+b,0) % 2 ? 'odd' : 'even';
}