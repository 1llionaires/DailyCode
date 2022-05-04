// Given a non-empty array of integers, return the result of multiplying the values together in order.

//P: array of numbers
//R: multiply elements of array
//E: given [1,2,3], result 6
//   given [1,2,3,4], result 24
//   given [4, 1, 1, 1, 4], result 16
//PC: create a function to mutiply all elements of the array
function grow(x){
    return x.reduce((a,b)=>a*b)
}