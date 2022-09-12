// The two oldest ages function/method needs to be completed. It should take an array of numbers as its argument and return the two highest numbers within the array. The returned value should be an array in the format [second oldest age,  oldest age].

// The order of the numbers passed in could be any order. The array will always include at least 2 items. If there are two or more oldest age, then return both of them in array format.

//P: array
//R: return two largest elements in the array as an array
//E: given [1, 2, 10, 8], results [8, 10]
//   given [1, 5, 87, 45, 8, 8], results [45, 87]
//   given [1, 3, 10, 0], results [3, 10]
//PC: create a function that returns the two largest values in the array
function twoOldestAges(ages) {
    return ages.sort((a, b) => a - b).slice(-2);
} 