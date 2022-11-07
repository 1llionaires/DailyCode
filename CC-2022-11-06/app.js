// Write reverseList function that simply reverses lists.

//array/ list of integers/words, can by empty, no funny biz
//return the array in reverse order
//create a function that reverses the order of the array

// function reverseList(arr){
//     return arr.reverse()
// }

const reverseList = arr => arr.reverse()

console.log(reverseList([]),[])
console.log(reverseList([1,2,3]),[3,2,1])
console.log(reverseList([3,2,1]),[1,2,3])