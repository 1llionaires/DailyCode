// Create a function with two arguments that will return an array of the first (n) multiples of (x).

// Assume both the given number and the number of times to count will be positive numbers greater than 0.

// Return the results as an array (or list in Python, Haskell or Elixir).

//P: (x,n) x = lower value n = higher value 
//R: return array of multiples of x lower than n
//E: given (1,10), result [1,2,3,4,5,6,7,8,9,10]
//   given (2,5), result [2,4,6,8,10]
//   given (1,4) result [1,2,3,4]
//PC: create a function that takes in two integers as arguments and returns multiples of (x*n) as array
function countBy(x, n) {
    let z = [];
    let y = x*n
    for(let i=x;i<=y;i++){
      if(i%x===0){
        z.push(i)
      }
    }
    return z;
}

//OR

function countBy(x, n) {
    var z = [];
    for (i = 1; i <= n; i++) {
        z.push(x * i);
    }
    return z;
}
