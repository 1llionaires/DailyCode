// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

//P: string (name)
//R: return string with only initials separated by a period
//E: given "Sam Harris", result 'S.H'
//   given "Patrick Feenan", result 'P.F'
//   given "Evan Cole", result 'E.C'
//PC: create a function that splits the name and maps the first element to array and join back into string. make sure result is in uppercase
function abbrevName(name){
    return name.split(' ').map((n)=>n[0]).join(".").toUpperCase();
}