// In this Kata we are passing a number (n) into a function.

// Your code will determine if the number passed is even (or not).

// The function needs to return either a true or false.

// Numbers may be positive or negative, integers or floats.

// Floats with decimal part non equal to zero are considered UNeven for this kata.

//P: n num
//R: function that checks if number is even
//E: given 0, result true
//   given 0.5, result false
//   given -4, result true
//PC: create a function that takes in a number and checks if its even    
//    use a conditional
//    check for decimals
function testEven(n){
    if(n % 2 === 0){
        return true
    }else if(n % 2 === 1){
        return false
    }else if(n = n.toFixed(1)){
        return false
    }
}

//OR
function testEven(n){
    return n % 2 === 0
}