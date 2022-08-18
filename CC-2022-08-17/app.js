// An AI has infected a text with a character!!

// This text is now fully mutated to this character.

// If the text or the character are empty, return an empty string.
// There will never be a case when both are empty as nothing is going on!!

// Note: The character is a string of length 1 or an empty string.

//P: (text, char)
//R: replace all characters in the text to char parameter
//E: given ('abc','z'), results 'zzz'
//   given ('codewars',' '), results '        '
//   given ('_asdfg_','1'), results '1111111'
//PC: create a function that returns a string where the char parameter is repeated x number of times with x being the length of the text parameter
function contamination(text, char){
    return char.repeat(text.length)
}