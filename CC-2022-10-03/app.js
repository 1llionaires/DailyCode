// Write a function toWeirdCase (weirdcase in Ruby) that accepts a string, and returns the same string with all even indexed characters in each word upper cased, and all odd indexed characters in each word lower cased. The indexing just explained is zero based, so the zero-ith index is even, therefore that character should be upper cased and you need to start over for each word.

// The passed in string will only consist of alphabetical characters and spaces(' '). Spaces will only be present if there are multiple words. Words will be separated by a single space(' ').

//P: string of word(s)
//R: return the string with weird casing where each word starts at index 0 and all even indexes are uppercase and odd indexes are lowercase
//E: given "String", results "StRiNg"
//   given "Weird string case", results "WeIrD StRiNg CaSe"
//   given 'This is a test', results 'ThIs Is A TeSt'
//PC: create a function that splits the string by the spaces in between the words
//    map through the array and split the subarray into individual elements
//    if the index of the character is even change the element to uppercase
//    else change it to lowercase
//    join the array and subarray back into string form
function toWeirdCase(string){
    return string.split(' ').map((v,i)=>v.split('').map((v,i)=>i%2===0?v.toUpperCase():v.toLowerCase()).join('')).join(' ')
}