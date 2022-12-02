// Given a string of characters as input, write a function that returns it with the characters reversed. No Reverse Method (well brute force it first, but then no reverse method)! 


function reverseString (str){
    //str -> char
    //str=> str rev
    // return str.split('').reverse().join('')
    //empty str -> loop through the str and add letters to a new str
    //leon -> noel
    let reverseStr = ''
    for(let char of str){
        reverseStr = char + reverseStr
    }return reverseStr
}

console.log(reverseString('bob'),'bob')
console.log(reverseString('john'),'nhoj')
console.log(reverseString('sarah'),'haras')