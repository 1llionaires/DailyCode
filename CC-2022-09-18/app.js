// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

//P: arrary of integers
//R: return whether the sum of the array elements is odd or even
//E: given [0], results 'even'
//   given [0,1,4], results 'odd'
//   given [0,-1,-5], results 'even'
//PC: create a function that reduces the array by summing the elements
//    use modulo to determine whether the sum is odd or even and return a string with result
function oddOrEven(array) {
    return array.reduce((a,b)=>a+b,0)%2==0?'even':'odd'
}