// Finish the solution so that it sorts the passed in array of numbers. If the function passes in an empty array or null/nil value then it should return an empty array.

//P: array of numbers
//R: return sorted array in ascending order
//E: given [1, 2, 10, 50, 5], results [1,2,5,10,50]
//   given (null), results []
//   given [20, 2, 10], results [2,10,20]
//PC: create a function that returns an empty array if parameters are null and sort the array in ascending order 
function solution(nums){
    if (nums==null){
      return []
    }else{
      return nums.sort((a,b)=>a-b,0)
    }
}