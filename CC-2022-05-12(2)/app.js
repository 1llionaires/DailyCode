// Given a number n, return the number of positive odd numbers below n, EASY!

//P: number
//R: return how many positive odd numbers are below n
//E: given 7, result 3
//   given 15, result 7
//   given 15023, result 7511
//PC: create a function to get number of odd numbers below n
function oddCount(n){
    return Math.floor(n/2)
}