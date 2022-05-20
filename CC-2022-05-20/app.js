// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: string
//R: return string with first and last characters removed
//E: given mozilla, return ozill
//   given word, return or
//   given world, return orl
//PC: create a function that takes a string a returns string without first and last characters
function removeChar(str){
    return str.substring(1, str.length-1);
};

//OR

function removeChar(str) {
    return str.slice(1, -1);
}