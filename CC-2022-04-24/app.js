// We need a function that can transform a string into a number. What ways of achieving this do you know?

// Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

//P: strings
//R: numbers
//E: given '123', return 123
//   given '605', return 605
//   given '-7', return -7
//PC: create a function that takes in str and returns nums
var stringToNumber = function(str){
    return Number(str)
}