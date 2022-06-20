// You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.

//P: string  (word)
//R: return middle character of the word. if the length of the word is even display both middle letters
//E: given 'test', result 'es'
//   given 'testing', result 't'
//   given 'middle',result 'dd'
//PC: create a function that checks the length of the string and returns the middle characters
function getMiddle(s){
  return s.substr(Math.ceil(s.length / 2 - 1), s.length % 2 === 0 ? 2 : 1);
}