// Your task is to sum the differences between consecutive pairs in the array in descending order.

//P: array of integers
//R: return the sum of differences between two elements next to each other with the array going in a descending order
//E: given [1,2,10], result 9
//   given [-3,-2,-1], result 2
//   given [-17, 17], result 34
//PC: create a function that sorts the array in descending order
//    create a variable to hold the sum
//    loop through the array and find the difference between array elements
//    return the sum
function sumOfDifferences(arr) {
    let sorted = arr.sort((a,b)=>b-a)
    let sum = 0
    for (let i=0;i<sorted.length-1;i++){
      sum += sorted[i] - sorted[i+1]
    }return sum
}