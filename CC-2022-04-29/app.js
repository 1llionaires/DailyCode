// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//P: string
//R: check string for shortest word and return its length
//E: given "bitcoin take over the world maybe who knows perhaps", result 3
//   given "turns out random test cases are easier than writing out basic ones", result 3
//   given "Let's travel abroad shall we, result 2
//PC: create a function that splits string into array
//    sort array by length and return shortest word length
function findShort(s){
    const strArray = s.split(' ')
    const orderedArray = strArray.sort((a,b)=>{
    return a.length - b.length  
  })
    return orderedArray[0].length
  }
  