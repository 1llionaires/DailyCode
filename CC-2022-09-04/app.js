// Input: Array of elements

// ["h","o","l","a"]

// Output: String with comma delimited elements of the array in th same order.

// "h,o,l,a"

//P: array
//R: return the array as a string
//E: given ['h','i'], results 'hi'
//   given ['c','o','d','e'], results 'code'
//   given ['w','a','r','s'], results 'wars'
//PC: create a function that returns an array as a string
function printArray(array){
    return array.join();
}