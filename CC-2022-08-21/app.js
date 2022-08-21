// You are to write an function that takes a string as it's first paramter. This string will be a string of words.

// You are expected to then use the second parameter, which will be an integer, to find the corresponding word in the given string. The first word would be represented by 0.

// Once you have the located string you are finally going to multiply by it the third provided paramater, which will also be an interger. You are additionally required to add a hyphen in between each word.

//P: (str,loc,num)
//R: the word at the location parameter in the string should be repeated num parameter times and each word needs to be separated by hyphens
//E: given ("This is a string",3,5), results "string-string-string-string-string"
//   given "(Creativity is the process of having original ideas that have value. It is a process; it's not random.",8 ,10), results "that-that-that-that-that-that-that-that-that-that"
//   given ("Is sloppiness in code caused by ignorance or apathy? I don't know and I don't care.",6 ,8), results "ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance-ignorance"
//PC: create an array constructor and fill the array to change the value of the elements of the array and join the array with hyphens in between
const modifyMultiply = (str,loc,num) =>
   Array(num).fill(str.split(' ')[loc]).join('-')