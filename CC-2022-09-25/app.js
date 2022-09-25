// You will be given a list of strings. You must sort it alphabetically (case-sensitive, and based on the ASCII values of the chars) and then return the first value.

// The returned value must be a string, and have "***" between each of its letters.

// You should not remove or add elements from/to the array.

//P: array of strings
//R: return the first element of the sorted array with *** between each letter of the string
//E: given ["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"], results 'b***i***t***c***o***i***n'
//   given ["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"], results 'a***r***e'
//   given ["hyper", "energy", "water", "drag", "keys"], results 'e***n***e***r***g***y'
//PC: create a function that sorts the array of strings and take the first element of the array and split the string and join it with '***'
function twoSort(s) {
    let sorted = s.sort()
    for(let i=0;i<sorted.length;i++){
      return sorted[0].split('').join('***')
    }
}