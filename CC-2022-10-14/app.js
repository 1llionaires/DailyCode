// Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively.

//P: array of postive and negative integers, no special char or letters
//R: return the largest and smallest integer value from the array in two separate functions
//E: given [4,6,2,1,9,63,-134,566], result max = 566, min = -134
//   given [-52, 56, 30, 29, -54, 0, -110], result min = -110, max = 56
//   given [42, 54, 65, 87, 0], result min = 0, max = 87
//PC: create two functions where one function returns the maximum value and the other function returns the minimum value of the given array
var min = function(list){
    return Math.min(...list)
}

var max = function(list){ 
    return Math.max(...list)
}