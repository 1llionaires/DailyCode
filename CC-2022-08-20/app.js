// Remove an exclamation mark from the end of a string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

//P: string
//R: remove the last exclamation point in the string if present
//E: given 'Hi!', results 'Hi'
//   given 'Hi!!!', results 'Hi!!'
//   given '!Hi!', results '!Hi'
//PC: create a function that checks if last character in string is an exclamation point and slice it out if true
function remove (string) {
    return (string[string.length-1] == '!') ? string.slice(0,string.length-1) : string;
}

//OR


function remove(s) {
    return s.endsWith('!') ? s.slice(0, -1) : s;
}