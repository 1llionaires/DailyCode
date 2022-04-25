// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

//P: string and integer
//R: compare value of string and integer without using some built in methods
//E: given ('1',1), results true
//   given (1,'1'), results true
//   given (120,'021'), results false
//PC: create a function that compares value of string and number resulting in boolean
function add(a, b){
    return (Math.floor(a)===b || Math.floor(b)===a) ? true : false
}

//OR

function add(a,b){
    return a==b
}
      