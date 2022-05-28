// Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.

// Example:

// ["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

// None of the arrays will be empty, so you don't have to worry about that!

//P: array
//R: return array after removing every other elements
//E: given [keep,remove,keep,remove,keep], result [keep,keep,keep]
//   given [hello, world, have, a, nice, day], result [hello,have,nice]
//   given [100, days, of, code], result [100,of]
//PC: create a function that removes every other element in the array
function removeEveryOther(arr){
    let newArr = [];
    for(let i = 0; i < arr.length; i += 2) {
      newArr.push(arr[i]);
    }
    return newArr;
}