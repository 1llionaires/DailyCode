
// This is a spin off of my first kata.

// You are given a string containing a sequence of character sequences separated by commas.

// Write a function which returns a new string containing the same character sequences except the first and the last ones but this time separated by spaces.

// If the input string is empty or the removal of the first and last items would cause the resulting string to be empty, return an empty value (represented as a generic value NULL in the examples below).

//P: "array" of numbers in a string
//R: return a string of numbers with the first and last characters removed
//E: given ['1,2,3'], result '2'
//   given [''], result null
//   given ['1'], result null
//PC: create a function that splits the string into an array
//    slice the first and last elements of the array
//    join  the array back into string or return null
function array(arr){
    return arr.split(",").slice(1,-1).join(" ") || null;
}