// Given an array of integers.

// Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

// If the input is an empty array or is null, return an empty array.

//P: array of integers
//R: return array with count of positive numbers in array and sum of all negative numbers
//E: given [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], results [10, -65]
//   given [0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14], results [8, -50]
//   given [0,0], results []
//PC: create a function that loops through the array and counts number of positives and sums all negative integers and return as array
function countPositivesSumNegatives(input) {
    if(input==null||input.length<1){
        return []
    }
    let arr = []
    let positive = 0
    let negative = 0
    for(let i=0;i<input.length;i++){
       if(input[i]>0){
        positive +=1
      }else{
        negative += input[i]
      }
    }return [positive, negative]
}