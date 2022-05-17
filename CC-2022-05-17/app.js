// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

//P: integers
//R: square each digit of the integer and return new number
//E: given 9119,result 811181
//   given 3212, result 9414
//   given 0, result 0
//PC: create a function that takes in an integer, 
//    convert it to a string then array, 
//    loop through array and multiply each element to itself, 
//    join the array and convert string back to number
function squareDigits(num){
    let x = num.toString().split('').map(Number)
    x.forEach((element,i)=>x[i]=element*element)
    return Number(x.join(''))
}