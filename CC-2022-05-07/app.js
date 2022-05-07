// write me a function stringy that takes a size and returns a string of alternating '1s' and '0s'.

// the string should start with a 1.

// a string with size 6 should return :'101010'.

// with size 4 should return : '1010'.

// with size 12 should return : '101010101010'.

// The size will always be positive and will only use whole numbers.

//P: size(number)
//R: return 1s and 0s depending on size
//E: given 6, results '101010'
//   given 4, results '1010'
//   given 12, results '101010101010'
//PC: create a function that returns a string of 1s and 0s according to size parameter
function stringy(size) {
    let str = '';
    for (let i = 1; i <= size; i++) {
      str = str + (i % 2);
    }
    return str;
}