// Coding in function pickIt, function accept 1 parameter:arr, it's a number array, we need traverse arr by using for loop, if element is odd number, push it to array odd, if it's a even number, push it to array even.

// I've defined two array odd and even in the function, and also wrote the return statement. your work is write a for loop.

// If you forgot how to push an element to array, please refer to lesson 4.

//P:arr
//R: sort odd and even numbers in separate arrays
//E: given [1,2,3,4] return [1,3],[2,4]
//   given [6,9,4,2] return [9],[6,4,2]
//   given [10,24,23,7] return [23,7],[10,24]
//PC: create a function that takes in an array
//    use conditonal and modulo to separate integers in array
//    sort integers into odd and even array

function pickIt(arr){
    var odd=[],even=[];
    //coding here
    for (let i=0;i<arr.length;i++)
    if (arr%2 === 0){
        even.push(arr[i])
    }else{
        odd.push(arr[i])
    }
    
    return [odd,even];
  }