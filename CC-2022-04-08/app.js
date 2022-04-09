//Write a function to split a string and convert it into an array of words.

//P: string
//R: string to array
//E: given "Robin Singh", result ["Robin", "Singh"]
//   given "hello world", result ["hello", "world"]
//   given "I love arrays they are my favorite", result ["I","love","arrays","they","are","my","favorite"]
//PC: create a function that takes in a string and converts it to an array
function stringToArray(string){
    return string.split(' ')
};

//OR

const stringToArray = string => string.split(' ');