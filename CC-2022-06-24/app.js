// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

//P: str
//R: return string in camel case by converting dashes and underscores to camel case
//E: given "the-stealth-warrior", result "theStealthWarrior"
//   given "The_Stealth_Warrior", result "TheStealthWarrior"
//   given "A-B-C", result "ABC"
//PC: create a function that splits the string and maps new string
// use a conditional to check for dashes and underscores and replace them with the next capital letter
// splice the character after the dash or underscore so there are no duplicate letters
//return the new joined str
function toCamelCase(str){
    str = str.split('');
    return str.map(function(el, i){
      if(el == '-' || el == '_'){
        el = str[i+1].toUpperCase();
        str.splice(i+1, 1);
      }
      return el;
    }).join('');
}