// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

//P: array
//R: find the integer that occurs an odd number of times in the array
//E: given [7], results 7
//   given [1,1,2], results 2
//   given [1,2,2,3,3,3,4,3,3,3,2,2,1], results 4
//PC: create a function that takes in the array and sorts it in ascending order
//    create a variable for the count
//    loop through the array twice and compare how many times a element is repeated
//    return the number that appears an odd amount of times
function findOdd(A) {
    let count = 0
    let arr = A.sort((a,b)=>a-b)
    for (let i=0;i<arr.length;i++){
      for(let j=0;j<arr.length;j++){
        if(arr[i]===arr[j]){
          count += 1
        }
      }if(count % 2 !== 0){
      return arr[i]
      }
    }
  }

//OR

const findOdd = (xs) => xs.reduce((a, b) => a ^ b);