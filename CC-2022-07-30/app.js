// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

//P: array of integers
//R: sum the array withouth the highest and lowest numbers
//E: given [6, 2, 1, 8, 10], results 16
//   given [1, 1, 11, 2, 3], results 6
//   given [0, 1, 6, 10, 10], results 17
//PC: create a function that sorts the array in order, slices out first and last element in array, and reduce the array to an integer
function sumArray(array) {
    if(array===null){
      return 0
    }else if(array.length>2){
      return 0
    }else{
      return array.sort((a,b)=>a-b).slice(1,-1).reduce((a,b)=>a+b,0)
    }
}