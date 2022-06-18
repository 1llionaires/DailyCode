// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

//P: string
//R: check if string ends with specified characters
//E: given 'abc', 'bc', result true
//   given 'abc', 'd', result false
//   given 'abc', 'a', result false
//PC: create a function that checks if string ends with ending
function solution(str, ending){
    return str.endsWith(ending);
}