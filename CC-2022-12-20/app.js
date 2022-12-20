// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// two strings no letters or special char no funny bz
// two strings concat and remove duplicates
//given ("xyaabbbccccdefww","xxxxyyyyabklmopq"), results "abcdefklmopqwxy"
//given ("abcdefghijklmnopqrstuvwxyz"), results "abcdefghijklmnopqrstuvwxyz"
//create a function to concat the two strings as array and remove the duplicates and return to string 

function longest(s1, s2) {
    let arr1 = s1.split('')
    let arr2 = s2.split('')
    return [...new Set(arr1.concat(arr2))].sort().join('')
  }

//OR

function longest(s1, s2) {
    return [...new Set(s1+s2)].sort().join('')
  }