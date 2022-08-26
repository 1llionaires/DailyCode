// Oh no!
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

//P: array of string elements containing integers
//R: return a new array with integer elements not contained in strings
//E: given ["1.1","2.2","3.3"], results [1.1,2.2,3.3]
//   given "9.9", "1.6", "2.3", "8.8", "7.4", "2.2", "7.4", "5.6"], results [9.9, 1.6, 2.3, 8.8, 7.4, 2.2, 7.4, 5.6]
//   given ["5.4", "4.6"], results [5.4, 4.6]
//PC: create a function that maps a new array to convert the string elements to numbers
function toNumberArray(stringarray){
    return stringarray.map(Number)
}