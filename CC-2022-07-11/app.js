// Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

//P: string
//R: return string with duplicates removed
//E: given 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta', results 'alpha beta gamma delta'
//   given 'alpha beta beta gamma gamma gamma delta', results 'alpha beta gamma delta'
//   given 'alpha beta beta gamma gamma', results 'alpha beta gamma'
//PC: create a function to split the string into arrays of words
//    filter the array so there are no duplicates and join the array back to string
function removeDuplicateWords (s) {
    let a = s.split(' ')
    return a.filter((item,index)=> a.indexOf(item)===index).join(' ')
}