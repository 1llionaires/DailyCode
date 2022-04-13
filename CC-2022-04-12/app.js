//Write a function that checks if a given string (case insensitive) is a palindrome.

//P: string
//R: check if string is a palindrome (boolean)
//E: given 'racecar', result true
//   given 'abba', result true
//   given 'hello', result false
//PC: write a function that takes in a string and checks if it is a palindrome
function isPalindrome(x) {
    // your code here
    let reverseStr = x.split('').reverse().join('')
    if(x.toLowercase()===reverseStr.toLowercase){
        return true
    }else{
        return false
    }
  }