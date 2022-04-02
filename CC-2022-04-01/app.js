//This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//P: numbers
//R: multiply even num by 8 and odd num by 9
//E: given 1, result 9
//   given 2, result 16
//   given 3, result 27
//PC: create a function that checks even/odd num and returns num *8 or *9
function simpleMultiplication(number) {
    // your code........
  if (number%2===0){
    return number*8
  }else{
    return number*9
  }
}

//OR

function simpleMultiplication(number){
    return number%2===0? number*8 : number*9
}