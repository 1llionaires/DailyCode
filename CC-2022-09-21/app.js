// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//P: a string with lowercase and uppercase letters
//R: return an array with the indexes of the capital letters in the string
//E: given 'CodEWaRs', results [0,3,4,6]
//   given 'LeArN', results [0,2,4]
//   given 'hYpeR, results [1,4]
//PC: create a function that loops through the string and checks if the letter is uppercase
//    if the letter is uppercase push the index to a new array and return the array
var capitals = function (word) {
    let result = []
    for(let i=0;i<word.length;i++){
      if(word[i]===word[i].toUpperCase()){
        result.push(i)
      }
    }return result
};