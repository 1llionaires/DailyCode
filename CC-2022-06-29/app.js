// When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

//P: letter in the alphabet (string)
//R: numerical position of the alphabet
//E: given 'a' results, 1
//   given 'c' results, 3
//   given 'z' results 26
//PC: create a function that takes in a letter as a string and returns numerical position of the alphabet
function position(letter){
    const letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
    const lowercase = letter.toLowerCase()
    const position = letters.indexOf(lowercase)+1
    return `Position of alphabet: ${position}`
}

//OR 

function position(letter){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return 'Position of alphabet: ' + (alphabet.indexOf(letter) + 1);
}