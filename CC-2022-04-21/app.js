// When provided with a number between 0-9, return it in words.

// Input :: 1

// Output :: "One".

// If your language supports it, try using a switch statement.

//P: numbers
//R: convert integers into string/words
//E: given 1, result 'One'
//   given 2, result 'Two'
//   given 0, result 'Zero'
//PC: create a function that converts integer into word+str 
function switchItUp(number){
    if (number === 1) {
    return "One";
    } else if (number === 2) {
        return "Two";
    } else if (number === 3) {
        return "Three";
    } else if (number === 4) {
        return "Four";
    } else if (number === 5) {
        return "Five";
    } else if (number === 6) {
        return "Six";
    } else if (number === 7) {
        return "Seven";
    } else if (number === 8) {
        return "Eight";
    } else if (number === 9) {
        return "Nine";
      } else {
        return "Zero";
      }
    }

//OR

const switchItUp = number => [`Zero`,`One`, `Two`, `Three`, `Four`, `Five`, `Six`, `Seven`, `Eight`, `Nine`][number]