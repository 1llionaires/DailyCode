// Return a new array consisting of elements which are multiple of their own index in input array (length > 1).

//P: array of integers
//R: return an array of integers whos index is a mulitple of the element
//E: given [22, -6, 32, 82, 9, 25], result  [-6, 32, 25]
//   given [68, -1, 1, -7, 10, 10], result [-1, 10]
//   [-56,-85,72,-26,-14,76,-27,72,35,-21,-67,87,0,21,59,27,-92,68], result [-85, 72, 0, 68]
//PC: create a function to filter out elements whos index is a mulitple of the number
function multipleOfIndex(array) {
    return array.filter((v, i) => v % i == 0);
}