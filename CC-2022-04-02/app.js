//Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0.

//P: integer
//R: sum from 1 to number
//E: given 2, result (1+2=3)
//   given 5, result (1+2+3+4+5=15)
//   given 8, result (1+2+3+4+5+6+7+8=36)
//PC: write a function that takes integer and sums 1 to the integer
var summation = function (num){
    return num * (num+1)/2
}