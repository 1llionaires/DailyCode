// Write a function that takes an array of strings as an argument and returns a sorted array containing the same strings, ordered from shortest to longest.

//P: array of words
//R: return array sorted from shortest to longest word length
//E: given ["Telescopes", "Glasses", "Eyes", "Monocles"], result ["Eyes", "Glasses", "Monocles", "Telescopes"]
//   given ["Beg", "Life", "I", "To"], result ["I", "To", "Beg", "Life"]
//   given ["", "Moderately", "Brains", "Pizza"], result ["", "Pizza", "Brains", "Moderately"]
//PC: create a function to sort array from shortest to longest length
function sortByLength (array) {
    return array.sort((a,b)=>a.length-b.length)
};