// This Kata is intended as a small challenge for my students

// All Star Code Challenge #18

// Create a function that accepts 2 string arguments and returns an integer of the count of occurrences the 2nd argument is found in the first one.

// If no occurrences can be found, a count of 0 should be returned.

//P: (string,letter)
//R: return how many time the letter occurs in the string
//E: given ('hello','o') results 1
//   given ('hello','l'), results 2
//   given ('','z'), results 0
// PC: create a function that checks the string for the letter and returns the count
function strCount(str, letter){  
    let arr = str.split('');
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
      if (letter === arr[i]) {
        count +=1;      
      }
    }
    return count
}

//OR

function strCount(str, letter){  
    return str.split(letter).length-1
}
