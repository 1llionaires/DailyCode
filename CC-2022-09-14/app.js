// Find the sum of the odd numbers within an array, after cubing the initial integers. The function should return undefined if any of the values aren't numbers.

//P: array
//R: return sum of cubed odd integers in the array and return undefined if array is empty
//E: given [], result undefined
//   given [1, 2, 3, 4], result 28
//   given [-3,-2,2,3], result 0
//PC: create a function with a variable set to zero
//    loop through the arr and use a conditional
//    if typeof arr[i] is not a number return undefined
//    if arr[i]% is not equal to zero then sum the cubed integers in the variable created earlier
//    return the result variable
function cubeOdd(arr) {
    let result = 0
    for(let i=0;i<arr.length;i++){
      if(typeof arr[i] !== 'number'){
        return undefined
      }else if(arr[i]%2 !== 0){
        result += Math.pow(arr[i],3)
      }
    }return result
}