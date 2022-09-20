// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//P: array of words of differing length
//R: return the array sorted by length of words from shortest to longest
//E: given ["Telescopes", "Glasses", "Eyes", "Monocles"], results ["Eyes", "Glasses", "Monocles", "Telescopes"]
//   given ["", "Moderately", "Brains", "Pizza"], results ["", "Pizza", "Brains", "Moderately"]
//   given ["Longer", "Longest", "Short"], results ["Short", "Longer", "Longest"]
//PC: create a function that sorts the array elements from shortest to longest in length of letters
function sortByLength (array) {
    return array.sort((a,b)=>a.length-b.length)
};