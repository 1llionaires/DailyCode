// Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

//P: two strings a,b
//R: take two numbers as strings and add them. answer should be a string
//E: given "4", "5", result "9"
//   given "34", "5", result "39"
//   given "", "", result "0"
//PC: create a function that takes 2 integers as string
//    convert string to number and sum and convert back to string
function sumStr(a,b) {
    const result = Number(a) + Number(b);
    return result.toString();
}

//OR 

function sumStr(a,b) {
    return toString(Number(a) + Number(b));
}
