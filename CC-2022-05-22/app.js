// Complete the solution so that it reverses all of the words within the string passed in.

//P: string
//R: reverse order of words in the string
//E: given 'hello world', result 'world hello'
//   given 'The greatest victory is that which requires no battle', result 'battle no requires which that is victory greatest The'
//   given 'reverse the words', result 'words the reverse'
//PC: create a function that reverses the word order in a string
function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}