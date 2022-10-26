// Given an array of integers , Find the Nth smallest element in this array of integers.

// Notes
// Array/list size is at least 3 .

// Array/list's numbers could be a mixture of positives , negatives and zeros .

// Repetition in array/list's numbers could occur , so don't Remove Duplications .

// nthSmallest({3,1,2} ,2) ==> return (2) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({15,20,7,10,4,3} ,3) ==> return (7) 
// nthSmallest({177,225,243,-169,-12,-5,2,92} ,5) ==> return (92) 

//array of integers, no special char, no letters, no empty arrays(at least 3 elements)
//return the nth smallest integer in the array

// function nthSmallest(arr,pos){
       //sort the array
       //grab nth(n-1) element
//     return arr[pos-1].sort((a,b)=>a-b)
// }

const nthSmallest = (arr,pos) => arr[pos-1].sort((a,b)=>a-b)

console.log(nthSmallest([3,1,2],2),2)
console.log(nthSmallest([15,20,7,10,4,3],3),7)
console.log(nthSmallest([177,225,243,-169,-12,-5,2,92],5),92)