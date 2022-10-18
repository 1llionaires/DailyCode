// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

//P: string, letters, numbers, special char
//R: return string with every character repeated once
//E: given "String", result "SSttrriinngg"
//   given "1234!_ ", result "11223344!!__  "
//   given "Hello World",result "HHeelllloo  WWoorrlldd"
//PC: create a function that takes in a string and split the string into an array
//    map each array element and concat el+el and join the array back into string
function doubleChar(str) {
    return str.split('').map(el => el.concat(el) ).join('');
}