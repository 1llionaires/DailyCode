// You must implement a function that returns the difference between the largest and the smallest value in a given list / array (lst) received as the parameter.

// lst contains integers, that means it may contain some negative numbers
// if lst is empty or contains a single element, return 0
// lst is not sorted

//P: array of integers
//R: return the difference between the highest and lowest values in the array
//E: given [0, 1, 2, 3, 4, 5, 6], result 6
//   given [-0, 1, 2, -3, 4, 5, -6], result 11
//   given maxDiff([16]), result 0
//PC: create a function that returns 0 if list.length<2
//    else return Math.max of list subtracted by Math.min of list
function maxDiff(list) {
    return list.length<2?0:Math.max(...list)-Math.min(...list);
};