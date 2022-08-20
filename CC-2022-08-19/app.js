// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

//P: (string1, string2)
//R: return a new string containing (string1+string2) without using +, concat(), or join()
//E: given (string1, string2), results 'string1 string2'
//   given (text1, text2), results 'text1 text2'
//   given (123, 456), results '123 456'
//PC: create a function that returns a new string concatenating string 1 and 2 without using +, concat(), or join()
function joinStrings(string1, string2){
    return `${string1} ${string2}`
}

//OR

const joinStrings = (string1, string2) => `${string1} ${string2}`;