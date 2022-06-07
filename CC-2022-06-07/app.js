// Your goal in this kata is to implement a difference function, which subtracts one list from another and returns the result.

// It should remove all values from list a, which are present in list b keeping their order.

// If a value is present in b, all of its occurrences must be removed from the other:

//P: array a and integer b
//R: return new array with all instances of integer b removed from array
//E: given [1,2],[1], result [2]
//   given [1,2,2,2,3],[2], result [1,3]
//   given [1,2,2],[2], result [1]
//PC: create a function to filter integer b from array a
function arrayDiff(a, b) {
    return a.filter(val => !b.includes(val))
}