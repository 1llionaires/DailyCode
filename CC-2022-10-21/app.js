// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string

//string of numbers, no empty strings, no letters or special char, no funny biz
//return a new string by replacing all digits 5 and over with '1' and all digits under 5 with '0'
// '45385593107843568', result '01011110001100111'
// '509321967506747', result '101000111101101'
// '366058562030849490134388085', result '011011110000101010000011011'
// function fakeBin(x){
//     //create a variable to store the new string
//     let result = ''
//     //loop through the string and use a conditional to check the digits
//     for (let i=0;i<x.length;i++){
//     //if x[i]>=5 result += '1' else if x[i]<5 result += '0'   
//     if (x[i]>=5){
//         result += '1'
//     }else if(x[i]<5){
//         result += '0'
//     }
//     //return result
//     }return result
// }

// function fakeBin(x){
//     return x.split('').map(n=>n>=5?'1':'0').join('')
// }

const fakeBin = (x) => x.split('').map(n=>n>=5?'1':'0').join('')