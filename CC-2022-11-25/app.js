// Given a number, write a function to output its reverse digits. (e.g. given 123 the answer is 321)

// Numbers should preserve their sign; i.e. a negative number should still be negative when reversed.

// Examples
//  123 ->  321
// -456 -> -654
// 1000 ->    1


//integer, never empty, can be negative, no letters or special char, no funny biz
//return the number reversed while preserving the negative if present

// function revereseNumber (n) {
//     //check if number is pos or neg
//     //multiply the reversed number by
//     return (n>0?1:-1)* Math.abs(n).split('').reverse().join('')
// }

const revereseNumber = n => (n>0?1:-1) * Math.abs(n).split('').reverse().join('')

console.log(reverseNumber(123), 321)
console.log(reverseNumber(-123), -321)
console.log(reverseNumber(4321234), 4321234)