// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!



// arr of int no letters or special char no funny biz
// find the first number that is non-consecutive in the array
// given [1,2,3,5], results 5
// given [1,2,3,4,6,7], results 6
// given [1,2,3], results null
//create a function that loops through the array starting from the second number to check if each number in array is one larger than the previous element

function firstNonConsecutive(arr) {
    for (let i = 1; i < arr.length; i++) {
      if (arr[i-1] + 1  !== arr[i]) {
        return arr[i];
      }
    }
    return null;
}