// Given a string, swap the case for each of the letters.

//P:string
//R: return a new string with cases swapped for each character
//E: given "CodeWars", results "cODEwARS"
//   given "", results ""
//PC: create a function that creates a new string variable to store results
//    loop through the string and check if each character is capital
//    if the character is capital += lowercase to result var
//    else += uppercase to result var
//    return result
function swap(str){
    let newStr = '';
    for(let i = 0; i < str.length; i++){
      if( str[i] === str[i].toLowerCase()){
        newStr += str[i].toUpperCase();
      }
      else {
        newStr += str[i].toLowerCase();
      }
    }
    return newStr;
}