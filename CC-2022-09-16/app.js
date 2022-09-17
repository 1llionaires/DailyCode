// Write a small function that returns the values of an array that are not odd.

// All values in the array will be integers. Return the good values in the order they are given.

//P: array of integers
//R: return array with even values
//E: given [0,1], results [0]
//   given [0,1,2,3], results [0,2]
//   given [22,34,55,67], results [22,34]
//PC: create a function that loops through the array and pushes even values into result array
function noOdds( values ){
    let result = []
     for (let i = 0; i < values.length; i++) {
       if (values[i] % 2 === 0 ) {
         result.push(values[i])
       }
     }
     return result
    }