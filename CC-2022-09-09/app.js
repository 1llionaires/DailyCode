// Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.

// Assume the first parameter will always be an array filled with at least 1 number and no duplicates. Assume the second parameter will be a string holding one of two values: 'value' and 'index'.

//P: array and return value or index
//R: return either the value or index of the smallest value in the array
//E: given ([1,2,3,4,5], 'value'), results 1
//   given ([1,2,3,4,5], 'index'), results 0
//   given ([10,2,33,24,35], 'index'), results 1
//PC: create a function that checks toReturn parameter with a boolean
//    if toReturn === value return Math.min(...arr)
//    else if toReturn === index return arr.indexOf(Math.min(...arr))
function min(arr, toReturn) {
    return toReturn === 'value'? Math.min(...arr): arr.indexOf(Math.min(...arr))
}
  