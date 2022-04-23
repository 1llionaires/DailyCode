// // Create a function which answers the question "Are you playing banjo?".
// // If your name starts with the letter "R" or lower case "r", you are playing banjo!

// // The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.

//P: name
//R: check if name contains 'R' or 'r' and return string name + 'plays banjo' or name + ' does not play banjo' if it doesnt contain those characters
//E: given Adam, result 'Adam does not play banjo'
//   given Bravo, result 'Bravo does not play banjo'
//   given Ringo, result 'Ringo plays banjo'
//PC: create a function that checks if parameters contains r and return str respectively
function areYouPlayingBanjo(name){
    return name.startsWith('R')|| name.startsWith('r') ? name + ' plays banjo' : name + ' does not play banjo'
}