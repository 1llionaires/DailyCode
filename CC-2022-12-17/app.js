// Complete the solution so that it reverses all of the words within the string passed in.

// Words are separated by exactly one space and there are no leading or trailing spaces.

// Example(Input --> Output):

// "The greatest victory is that which requires no battle" --> "battle no requires which that is victory greatest The"

//str no numbers or spec char
//return the string with the words in reverse order
//given "hello world", results "world hello"
//given "code wars", results "wars code"
//split the string with a space in between and reverse the string and join the string back with space in between each word

function reverseWords(str){
    return str.split(' ').reverse().join(' ');
}