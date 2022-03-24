// Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

//P: boolean
//R: return "Yes" for true and "No" for false
//E: given true, result "Yes"
//   given false, result "No"
//PC: create a function that returns a string according to the boolean value
function boolToWord( bool ){
    return bool === true ? "Yes" : "No";
}