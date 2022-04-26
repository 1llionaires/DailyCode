// Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

// Function:
// getNumberFromString(s)

//P: string
//R: remove non-digit characters and parse remaining for number
//E: given "hell5o wor6ld", result 56
//   given  "1", result 1
//   given "this is number: 7",result 7
//PC: create a function that takes in a string and removes all letters and returns an integer.

function getNumberFromString(s) {
    return parseInt(s.replace(/\D/g,''))
  }