// Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.


//P: string of words (more than 2 words, empty strings return empty string, no numbers or special char)
//R: return  the string with the first letter of each word capitalized and remove the space between the words in the  string
//E: given "hello case", result "HelloCase"
//   given "camel case word", result "CamelCaseWord"
//   given "", result ""
//PC: create a function that takes in a string parameter and split the string into an array
//    map the elements into a new array with the first letter capitalized using methods charAt() and toUpperCase()
//    slice the first index out of the array and add the rest to the capitalized letter and join the array back into a string while also removing the space in between the words
String.prototype.camelCase=function(){
    return this.split(' ').map(word=>word.charAt(0).toUpperCase() + word.slice(1)).join('');
}