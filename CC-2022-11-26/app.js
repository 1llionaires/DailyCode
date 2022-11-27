
// Write a method that takes one argument as name and then greets that name, capitalized and ends with an exclamation point.

// Example:

// "riley" --> "Hello Riley!"
// "JACK"  --> "Hello Jack!"

//string with name, no numbers, never empty, no special char, no funny biz
//return a greeting with "Hello (Name)!"

// function greet (name){
//     // return a new string with backtick 
//     // after the name parameter add methods to capitalize first letter and change all other letters to lowercase in the name
//     return `Hello ${name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)}!`
// }

const greet = name => `Hello ${name.charAt(0).toUpperCase()+name.toLowerCase().slice(1)}!`

console.log(greet(Riley), "Hello Riley!")
console.log(greet(LeoN), "Hello Leon!")
console.log(greet(baRbaRa), "Hello Barbara!")
