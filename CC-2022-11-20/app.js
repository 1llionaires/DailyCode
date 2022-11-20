// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)


// stray([1,1,2],2)
// stray([17, 17, 3, 17, 17, 17, 17],3)

//array of integers, no letters, no special char, no funny biz
//return the number that is unique in the array

function stray(numbers){
    //sort the array
    //use a conditional to check if first and second numbers are the same if not return first element if they are the same return the last element
    let arr = numbers.sort()
    return arr[0]!==arr[1]?arr[0]:arr[arr.length-1]
}

console.log(stray([1,1,2]))
console.log(stray([17, 17, 3, 17, 17, 17, 17],3))