// Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

//P: string
//R: return string with words longer than 4 letters reversed
//E: given "Welcome", results "emocleW"
//   given "This is a test",results "This is a test"
//   given "This is another test",results "This is rehtona test"
//PC: create a function that takes in a string and splits the string into array of word(s)
//    loop through the array to check if the words are longer than 4 letters and reverse them
//    push the reversed and non reversed words into a new array
//    return the array back into a string
function spinWords(string){
    let words = string.split(' ')
    let result = []
    for (let i=0;i<words.length;i++){
      if(words[i].length>4){
        result.push(words[i].split('').reverse().join(''))
      }else{
        result.push(words[i])
      }
    }return result.join(' ')
}