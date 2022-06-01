// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: string
//R: return how many vowels are contained in the string
//E: given 'abracadabra', result 3
//   given 'hello', result 2
//   given 'codewars', result 3
//PC: create a function that loops through the string and checks for vowels and adds to counter
function getCount(str) {
    let vowelsCount = 0;
    for (let i=0;i<str.length;i++){
      if (str[i] === 'a'){
        vowelsCount += 1
      }else if (str[i] === 'e'){
        vowelsCount += 1
      }else if (str[i] === 'i'){
        vowelsCount += 1
      }else if (str[i] === 'o'){
        vowelsCount += 1
      }else if (str[i] === 'u'){
        vowelsCount += 1
      }
    }
    return vowelsCount;
}

//OR

function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
}