// // Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?

// Examples:

// input:    output:
// 0    ->   0
// 2    ->   5
// 3    ->   5
// 12   ->   15
// 21   ->   25
// 30   ->   30
// -2   ->   0
// -5   ->   -5
// etc.

// number can be pos or neg, no letters, no special char, no funny biz
// return the number rounded to the nearest multiple of 5

// function roundToNext5 (n){
//     //divide n by 5 and round up to nearest int
//     //multiply the result by 5
//     return Math.ceil(n/5)*5
// }

const roundToNext5 = n => Math.ceil(n/5)*5

console.log(roundToNext5(0),0)
console.log(roundToNext5(2),5)
console.log(roundToNext5(-5),-5)
