// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.


//strings with mutiple words, no empty strings, no numbers, no funny biz
//return the string with words in reverse order and casing in reverse
//turn the string into an array
//reverse the order of the words
//join the array and split it again with a different divisor
//map through the array to change the casing
//join the array and return the string

console.log(strTransform("Example Input"),"iNPUT eXAMPLE")
console.log(strTransform("cODE wARS"),"Wars Code")
console.log(strTransform("HeLlO WoRlD"),"wOrLd hElLo")

// function strTransform(str) {
//     return str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('');
// }

const strTransform = (str) => str.split(' ').reverse().join(' ').split('').map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase()).join('')