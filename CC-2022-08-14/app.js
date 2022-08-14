// Count the number of Duplicates
// Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

//P: string
//R: return number of duplicates are in the string (duplicates of the same kind count once)
//E: given "abcde", results 0
//   given "aabbcde", results 2
//   given "Indivisibilities", results 2
//PC: create a function that turns the string to lower case, split and sort it. 
//    create a results array
//    loop through the new variable containing the string and check if lower[i]===lower[i+1] and if true push lower[i] to results array
//    create a constant to get rid of duplicates in the results
//    return the size of new array
function duplicateCount(text){
    let lower = text.toLowerCase().split('').sort()
    let results = []
    for (let i=0;i<lower.length;i++){
      if(lower[i]===lower[i+1]){
        results.push(lower[i])
      }
    }const setArray = new Set(results);
    return setArray.size
}