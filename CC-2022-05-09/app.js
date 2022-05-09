// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

//P: string
//R: reverse word order of the string
//E: given "hello world", result "world hello"
//   given "Hi there.", result "there. Hi"
//   given "codewars", result "codewars"
//PC: create a function that takes in a string and reverses the order of the words
function reverse(string){
    return string.split(' ').reverse().join(' ');
}