// Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. 

//P: string
//R: swap the case for each character in the string and leave numbers 
//E: given "hello world", result "HELLO WORLD"
//   given "HELLO WORLD", result "hello world"
//   given "12345", results "12345"
//PC: create a function that splits the string and maps if the letter is upper case then map lowercase and vice versa
String.prototype.toAlternatingCase = function () {
    return this.split("").map(a => a === a.toUpperCase()? a.toLowerCase(): a.toUpperCase()).join('')
}