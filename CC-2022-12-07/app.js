// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

//number, not letters or special char, no funny biz
//return a string depending on whether the number is 'odd' or 'even'
//given 1, result 'Odd'
//given 2, result 'Even'
//given 1234567, result 'Odd'

function evenOrOdd(number){
    return number%2===0?'Even':'Odd'
}