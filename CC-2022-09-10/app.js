// Calculate the product of all elements in an array.

// If the array is null or is empty, the function should return null.

//P: array
//R: product of all numbers in a numeric array
//E: given [5, 4, 1, 3, 9], results 540
//   given [-2, 6, 7, 8], results -672
//   given (null), results null
//PC: create a function that reduces the array by multiplying the elements and return null if array is empty or null
function product(values) {
    if(values===null||values.length===0) return null
    return values.reduce((a,b)=>a*b,1);
}