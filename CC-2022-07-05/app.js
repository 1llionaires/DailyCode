// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).

//P: father and son's age
//R: calulcate how many years it has been or will be till the father is double the son's age
//E: given (36,7) results, 22
//   given (55,30) results , 5
//   given (42,21) results , 0
//PC: create function that calculates when the father will be double the son's age
const twiceAsOld = (d,s) => Math.abs(d-2*s) 