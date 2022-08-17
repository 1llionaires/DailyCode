// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

//P: array of integers
//R: return an array containing highest and lowest numbers in the array
//E: given [1,2,3,4], results [1,4]
//   given [2554,5], results [5,2554]
//   given [5], results [5,5]
//PC: create a function that returns the [Math.min(),Math.max()]
function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}