// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//P: string
//R: reverse each word in the string but keep words in the same order
//E: given "This is an example!", result "sihT si na !elpmaxe"
//   given "double  spaces", result "elbuod  secaps"
//   given 'apple', result 'elppa'
//PC: create a function to reverse the words and the order and then reverse the order back
function reverseWords(str) {
    return str.split('').reverse().join('').split(' ').reverse().join(' ')
}