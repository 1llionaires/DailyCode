// Task
// Add the isUpperCase method to String to see whether the string is ALL CAPS. 

//P: string
//R: check if string is in all caps
//E: given 'c', result false
//   given 'C', result true
//   given 'hello I AM DONALD', result false
//PC: create a function that checks if the string is all caps
String.prototype.isUpperCase = function() {
    return String(this) === this.toUpperCase()
}