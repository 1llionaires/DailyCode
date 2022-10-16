// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

//P: string with letters and exclamation points, no special char, no funny biz
//R: return the string with all exclamation points removed
//E: given "Hello World!", result "Hello World"
//   given "Codewars! It's fun!", result "Codewars It's fun"
//   given "Coding! challenges! are! fun!", result "Coding challenges are fun"
//PC: create a function that takes in a string as parameter
//    split the string with the exclamation point being the divider
//    join the strings back without the exclamation point
function removeExclamationMarks(s) {
    return s.split('!').join('');
}