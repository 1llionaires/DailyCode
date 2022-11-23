// Your task is to make function, which returns the sum of a sequence of integers.

// The sequence is defined by 3 non-negative values: begin, end, step (inclusive).

// If begin value is greater than the end, function should returns 0

// Examples

// 2,2,2 --> 2
// 2,6,2 --> 12 (2 + 4 + 6)
// 1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
// 1,5,3  --> 5 (1 + 4)

//3 integers (begin,end,step) no letters, never emtpy, no special char, no funny biz
//return a sum of sequence of integers that fit the qualifications of the parameter

// function sequenceSum (begin,end,step){
//     //create an variable equal to zero
//     //start a loop with the parameters given and add each integer to the counter variable
//     let count = 0
//     for(let i=begin;i<=end;i+=step){
//         count += i
//     }return count
// }

const sequenceSum = (b,e,s) => b > e ? 0 : b + sequenceSum(b+s,e,s)

console.log(sequenceSum(2,6,2),12)
console.log(sequenceSum(1,5,1),15)
console.log(sequenceSum(1,5,3),5)