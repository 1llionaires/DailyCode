// Define a function that removes duplicates from an array of numbers and returns it as a result.

// The order of the sequence has to stay the same.

//P: array of numbers
//R: remove duplicate numbers from array
//E: given [1], result [1]
//   given [1,2]. result [1,2]
//   given [1,1,2], result [1,2]
//PC: create a function that removes duplivates in the array
function distinct(a) {
    return a.filter((item, index) => a.indexOf(item) === index);
}

//OR

function distinct(a) {
    return [...new Set(a)];
}