// This function should test if the factor is a factor of base.

// Return true if it is a factor or false if it is not.

//P: base,factor
//R: return boolean for factor is true/false of base number
//E: given (6,2), results true
//   given (7,2), results false
//   given (100,10), results true
//PC: create a function that checks base%factor===0?
function checkForFactor (base, factor) {
    return base % factor === 0;
}