// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

//P: string ('english')
//R: check if string contains word english
//E: given eNglisH, result true
//   given Egnlish. result false
//   given abcEnglishdef, result true
//PC: create a function that checks if the string contains 'english'
//    case does not matter
function spEng(sentence){
    //write your code here
      if (sentence.toLowerCase().includes('english') ){
        return true
      }else{
        return false
      }
    }

//OR

function spEng(sentence){
    let sentenceLower = sentence.toLowerCase();
    return sentenceLower.includes('english');
  }