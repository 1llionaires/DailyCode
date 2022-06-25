// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//P: boolean
//R: string
//E: given true, result 'true'
//   given false, result 'false'
//PC: create a function that takes in boolean and returns string equivalent
function booleanToString(b){
    return b? 'true' : 'false'
}

//OR

function booleanToString(b){
    return b.toString()
}