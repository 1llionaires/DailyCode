// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

//P: string (word)
//R: return the string with the first and last characters removed
//E: given 'code', result 'od'
//   given 'codewars', result 'odewar'
//   given 'javascript', result 'avascrip'
//PC: create a function that deletes the first and last characters of a string and returns the new string
function removeChar(str) {
    return str.slice(1, -1);
}