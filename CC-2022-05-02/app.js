// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

//P: numbers
//R: return a string that counts sheep
//E: given 1, result '1 sheep...'
//   given 2, result '1 sheep...2 sheep...'
//   given 3, result '1 sheep...2 sheep...3 sheep...'
//PC: create a function with a loop that adds sheep depending on parameter
var countSheep = function (num){
    let str = ''
    for (let i=1;i<=num;i++){
      str += i.toString()+' sheep...'
    }
    return str
  }