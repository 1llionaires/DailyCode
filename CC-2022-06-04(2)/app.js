// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

//P: integer
//R: return the integer rearranged so the digits are in descending order
//E: given 42145, result 54421
//   given 145263, result 654321
//   given 123456789, result 987654321
//PC: create a function that sorts the integer in descending order 
function descendingOrder(n){
    let digits = n.toString().split('')
    let realDigits = digits.map(Number)
    return Number(realDigits.sort((a,b)=>b-a).join(''))
}

//OR

function descendingOrder(n){
    return parseInt(String(n).split('').sort().reverse().join(''))
}