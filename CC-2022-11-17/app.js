// Given an array of strings of the same letter type. Return a new array, which will differ in that the length of each element is equal to the average length of the elements of the previous array.

// A few examples:

// ['u', 'y'] =>  ['u', 'y'] // average length is 1
// ['aa', 'bbb', 'cccc'] => ['aaa', 'bbb', 'ccc'] // average length is 3
// ['aa', 'bb', 'ddd', 'eee'] => ['aaa', 'bbb', 'ddd', 'eee'] // average length is 2.5 round up to 3
// If the average length is not an integer, use Math.round().
// The input array's length > 1


//array of strings containing a number of the same letter in each element, never empty, no numbers, no funny biz
//return a new array where each element contains a number of the same letter depending on the average length of each string

console.log(averageLength(['u', 'y']),['u', 'y'])
console.log(averageLength(['aa', 'bbb', 'cccc']), ['aaa', 'bbb', 'ccc'])
console.log(averageLength(['aa', 'bb', 'ddd', 'eee']),['aaa', 'bbb', 'ddd', 'eee'])

function averageLength(arr){
    //find the length of each string and find the average length and round to integer
    const avglength = Math.round(arr.join('').length/arr.length)
    //map a new array where the letter is repeated the same amount as avglength
    return arr.map(str => str[0].repeat(avgLength))
}