// Write a function to get the first element(s) of a sequence. Passing a parameter n (default=1) will return the first n element(s) of the sequence.

// If n == 0 return an empty sequence []

// var arr = ['a', 'b', 'c', 'd', 'e'];
// first(arr) //=> ['a'];
// first(arr, 2) //=> ['a', 'b']
// first(arr, 3) //=> ['a', 'b', 'c'];
// first(arr, 0) //=> [];

//parameter array of elements, array never 0, n can be 0 never negative (return []), no funny biz
//return an array with the first n number of elements 

console.log(first(['a', 'b', 'c', 'd', 'e'],1),['a'])
console.log(first(['a', 'b', 'c', 'd', 'e'],2),['a','b'])
console.log(first(['a', 'b', 'c', 'd', 'e'],0),[])

//use a conditional to check if n is 0 then return []
//if conditional is true slice all the elements of the array to return an empty array
//if n>0 then slice the elements that come after n

// function first(arr,n){
//     return n ==undefined?arr.slice(0,1):arr.slice(0,n)
// }

const first = (arr,n) => n==undefined?arr.slice(0,1):arr.slice(0,n)