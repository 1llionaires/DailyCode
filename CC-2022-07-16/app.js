// Challenge:

// Given a two-dimensional array of integers, return the flattened version of the array with all the integers in the sorted (ascending) order.

//P: array
//R: reduce and merge arrays into one array and sort them in ascending order
//E: given [], [1], results [1]
//   given [[3, 2, 1], [7, 9, 8], [6, 4, 5]], results [1, 2, 3, 4, 5, 6, 7, 8, 9]
//   given [[1, 3, 5], [100], [2, 4, 6]], results [1, 2, 3, 4, 5, 6, 100]
//PC: create a function that reduces array for flattening and concat into one array and sort array in ascending order
const flattenAndSort = (array) => array.reduce((acc, cur) => acc.concat(cur), []).sort((a, b) => a - b);
