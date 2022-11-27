// Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

// The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.


//string with letters, numbers, special chars, spaces, etc
//check if the string has all unique characters or has duplicates (lowercase and uppercase are considered two different char)


// function allUnique(str){
//     //create a new Set to get a str with all unique chars 
//     //compare the size of set to the length of the original str
//     return new Set(str).size === str.length
// }

const allUnique = str => new Set(str).size === str.length

console.log(allUnique("  nAa"),false)
console.log(allUnique("abcdef"),true)
console.log(allUnique("aA"),true)