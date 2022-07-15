// Given a string, capitalize the letters that occupy even indexes and odd indexes separately, and return as shown below. Index 0 will be considered even.

// For example, capitalize("abcdef") = ['AbCdEf', 'aBcDeF']. See test cases for more examples.

// The input will be a lowercase string with no spaces.

// Good luck!

//P: stirng
//R: return two strings in an array with alternate capitalization where capitals are on different indexes
//E: given 'codewars', results ['CoDeWaRs', 'cOdEwArS']
//   given '"abcdef"), results ['AbCdEf', 'aBcDeF']
//   given 'abracadabra', results ['AbRaCaDaBrA', 'aBrAcAdAbRa']
//PC: create a function with two arrays and loop through the string
//    set up conditionals so odd and even indexes are capitalized
//    return array with alernately capitalized strings
function capitalize(s){
    let first = []
    let second = []
    for(let i=0;i<s.length;i++){
      if([i]%2===0){
        first.push(s[i].toUpperCase())
      }else{
        first.push(s[i])
      }
      if([i]%2===0){
        second.push(s[i])
      }else{
        second.push(s[i].toUpperCase())
      }
    }return [first.join(''), second.join('')]
};