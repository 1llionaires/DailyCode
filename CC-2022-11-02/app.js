// This is the first step to understanding FizzBuzz.

// Your inputs: a positive integer, n, greater than or equal to one. n is provided, you have NO CONTROL over its value.

// Your expected output is an array of positive integers from 1 to n (inclusive).

// Your job is to write an algorithm that gets you from the input to the output.

//number n will be given, never empty, never negative, or letters, or special char, no funny biz
//return a new array containing numbers from 1 to number n 
//create a function that will loop through and iterate each number and add them to the array

function preFizz(n){
    let result = []
    for (let i=0;i<n;i++){
        result.push(i+1)
    }return result
}

console.log(preFizz(1),[1])
console.log(preFizz(3),[1,2,3])
console.log(preFizz(5),[1,2,3,4,5])