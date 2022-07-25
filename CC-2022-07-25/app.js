// Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).

//P: integer
//R: find the factors of the integer and return in an array or return integer is prime
//E: given 12, results [2,3,4,6]
//   given 25, results [5]
//   given 13, results '13 is prime'
// PC: create a function with an empty array
//     create a loop from 2 to the integer-1 (0,1,and integer dont count)
//     use a boolean to check conditions integer % i ==0 is true arr.push(i)
//     if arr.length>0 return arr else return `${integer} is prime`
function divisors(integer) {
    let arr = [];
    for(let i = 2; i < integer; i++){
        if(integer%i == 0){
            arr.push(i);
        }
    }
    return (arr.length>0)?arr: `${integer} is prime`;
};