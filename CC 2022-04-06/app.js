// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

// P: Is it always integers? Are there special characters? An empty arr?
// R: Boolean (T/F)
// E: Given [1,2,3] and 2, should return true
//    Given ['hello','world'] and hello, should return true
//    Given ['what','a','great','kata'] and kat, should return false
// PC: create a function that takes in an arr and value x
    function check (a,x){
        return a.include(x);
    }
// or
    const check = (a,x) => a.include(x);
//     check if array contains the value