// Complete the solution so that the function will break up camel casing, using a space between words.

//P: string
//R: if the string contains camelcasing then split the string up with a space between the two words
//E: given "camelCasing", results  "camel Casing"
//   given "identifier", results  "identifier"
//   given "", results  ""
//PC: create a function that takes in a string and split each character into an array
//    loop through the array and use a conditional to check if arr[i]===arr[i+1]
//    if the conditional is true add a space before the capital letter
//    join the array and return the result
function solution(string) {
    let arr = string.split('');
    for(let i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].toUpperCase()) {
        arr[i] = ' ' + arr[i];
      }
    }
    return arr.join('');
}