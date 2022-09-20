// Story
// Ben has a very simple idea to make some profit: he buys something and sells it again. Of course, this wouldn't give him any profit at all if he was simply to buy and sell it at the same price. Instead, he's going to buy it for the lowest possible price and sell it at the highest.

// Task
// Write a function that returns both the minimum and maximum number of the given list/array.

//P: array of integers
//R: return the min and max of the array in a new array
//E: given [1,2,3,4,5], results [1,5]
//   given [2334454,100,15,5], results [5,2334454]
//   given [1], results [1,1]
//PC: create a function that returns the minimum value and maximum value in the array

function minMax(arr){
    return [Math.min(...arr), Math.max(...arr)];
}