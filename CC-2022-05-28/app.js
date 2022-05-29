// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

//P: 2 arrays
//R: merge the arrays and sort it in ascending order, no duplicates
//E: given [1, 2, 3, 4, 5], [6, 7, 8, 9, 10], result  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   given [1, 3, 5, 7, 9], [10, 8, 6, 4, 2], result [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//   given [1, 3, 5, 7, 9, 11, 12], [1, 2, 3, 4, 5, 10, 12], result [1, 2, 3, 4, 5, 7, 9, 10, 11, 12]
//PC: create a function that merges two arrays and sorts the elements in ascending order and remove all duplicate values
function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
}