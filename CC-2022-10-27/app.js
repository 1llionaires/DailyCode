// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

// Examples
// "din"      =>  "((("
// "recede"   =>  "()()()"
// "Success"  =>  ")())())"
// "(( @"     =>  "))((" 

//string of words, contains letters and special chars,
//return a "(" if the character is unique in the string and ")" if there are characters that are identical in the string 
// encodeDupes("din") => "((("
// encodeDupes("recede") => "()()()"
// encodeDupes("(( @") => "))(("

function encodeDupes(str){
    return str.toLowerCase().split('').map((l,i,a)=>indexOf(l)===lastIndexOf(l)?'(':')').join('')
}

// toLowerCase
// split -> map -> indexOf===lastIndexOf ? '(' : ')'
// join

console.log(encodeDupes("din"),"(((")
console.log(encodeDupes("recede"),"()()()")
console.log(encodeDupes("(( @"),"))((")