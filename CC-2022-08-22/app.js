// A palindrome is a word, phrase, number, or other sequence of characters which reads the same backward or forward. This includes capital letters, punctuation, and word dividers.

// Implement a function that checks if something is a palindrome. If the input is a number, convert it to string first.

//P: string or integers
//R: return boolean whether string is a palindrome or not
//E: given 'hello', results false
//   given 'anna', results true
//   given '1221', results true
//PC: create a function that checks if string/integer is equal to the reverse version
function isPalindrome(line) {
    return line== String(line).split('').reverse().join('');
}