// In this Kata, you will be given a string that may have mixed uppercase and lowercase letters and your task is to convert that string to either lowercase only or uppercase only based on:

// make as few changes as possible.
// if the string contains equal number of uppercase and lowercase letters, convert the string to lowercase.

//P: string
//R: return the string in lower or uppercase depending on which count is higher within the string
//E: given 'coDe', results 'code'
//   given 'CODe', results 'CODE'
//   given 'coDE', results 'code'
//PC: create a function that checks how many lowercase or uppercase letters are in the string
//    use a boolean to check whether there are more lowercase or uppercase letters and return the corresponding string
function solve(s){
    let lower = 0
    let upper = 0
    for (let i=0;i<s.length;i++){
      if(s[i]==s[i].toUpperCase()){
        upper += 1
      }else{
        lower += 1
      }
    }
    return lower >= upper ? s.toLowerCase() : s.toUpperCase()
}