// I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

// P.S. Each array includes only integer numbers. Output is a number too.

//P: arr1 arr2
//R: sum arr1 and arr 2 and all of its elements
//E: given [1, 2, 3], [4, 5, 6], result 21
//   given [-1, -2, -3], [-4, -5, -6], result -21
//   given [0, 0, 0], [4, 5, 6], result 15
//PC: create a function that sums array elements and add the values
function arrayPlusArray(arr1, arr2) {
    return arr1.reduce((a,b)=>a+b,0) + arr2.reduce((a,b)=>a+b,0); 
}