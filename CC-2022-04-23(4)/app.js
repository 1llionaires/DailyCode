// *** No Loops Allowed ***

// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

//P: array
//R: check if array contains value without using loops
//E: given [1,2,3] 1, results true
//   given [a,b,c] b, results true
//   given [10,20] 30, results false
//PC: create a function that checks if array contains a value
function check (a,x){
    return a.includes(x)
}