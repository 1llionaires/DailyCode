// Combine strings function
// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

//P: string (names)
//R: combine first and last names together
//E: given ('James', 'Stevens'), result 'James Stevens'
//   given ('Kate', 'Summer'), result 'Kate Summer'
//   given ('Leon', 'Noel'), result 'Leon Noel'
//PC: create a function that concatenates first and last name strings
function combineNames(fname,lname){
    return fname.concat(' ',lname)
}