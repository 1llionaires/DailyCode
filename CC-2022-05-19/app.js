// Complete the solution so that it reverses the string passed into it.

//P: string
//R: return reversed string
//E: given world, return dlrow
//   given racecar, return racecar
//   given hello, return olleh
//PC: create a function that takes a string and returns reversed string
function solution(str){
    return str.split('').reverse().join('');  
}