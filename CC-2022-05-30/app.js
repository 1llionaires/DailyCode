// Write a function that returns a string in which firstname is swapped with last name.

//P: string (full name)
//R: return string with last name first
//E: given 'john Mclaine', result 'Mclaine john'
//   given 'leon Noel', result Noel leon'
//   given 'will Smith', result 'Smith will'
//PC: create a function that reverses order of names in string
function nameSuffle(str){
    return str.split(' ').reverse().join(' ')
}