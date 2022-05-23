// Write a function which calculates the average of the numbers in a given list.

//P: array of integers
//R: find the average of the elements in array
//E: given [1,1,1], result 1
//   given [1,2,3], result 2
//   given [1,2,3,4,], result 2.5
//PC: create a function that returns an average  of elements in array
function find_average(array) {
    if (array.length >0){
      let avg = array.reduce((a,b)=>a+b)/array.length 
      return avg
    }else{
      return 0
    }  
}