// Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

//P: number n
//R: return an array that contains the powers of 2 until nth power
//E: given n=0, results [1]
//   given n=1, results [1,2]
//   given n=2, results [1,2,4]
//PC: create a function that sets an empty array variable
//    create a loops through where i=0; i<=n; i++ and push 2**i and return the array
function powersOfTwo(n){
    let arr = [];
    for(let i = 0; i <= n; i++) {
      arr.push(2 ** i);
    }
    return arr;
  }