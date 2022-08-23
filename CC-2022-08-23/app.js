// Given a string s. You have to return another string such that even-indexed and odd-indexed characters of s are grouped and groups are space-separated (see sample below)
// Note: 
// 0 is considered to be an even index. 
// All input strings are valid with no spaces

//P: string
//R: return string with even-index and odd-index characters grouped together and separated by a space
//E: given 'CodeWars', results 'CdWr oeas'
//   given 'YCOLUE'VREER', results 'YOU'RE CLEVER'
//   given 'hello', results 'hlo el'
//PC: create a function that separates the odd and even indexed characters and then concat the odd and even indexed strings together with a space
function sortMyString(s) {
    let even = []
    let odd = []
    let arr = s.split('')
    for (let i=0;i<arr.length;i++){
      if(i%2===0){
        even.push(s[i])
      }else{
        odd.push(s[i])
      }
    }return even.join('')+' '+odd.join('')
}

//OR 

const sortMyString = s => {
    let even = s.split('').filter((v, i) => i % 2 === 0).join('')
    let odd = s.split('').filter((v, i) => i % 2 !== 0).join('')
    return even + ' ' + odd
}