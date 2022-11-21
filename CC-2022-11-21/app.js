//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:

// "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"

// --> "alpha beta gamma delta alpha beta gamma delta"

//string of words, never empty, all lowercase, no funny biz
//return a string without consecutive words that are the same

// function removeDupeWords(str){
//     //split str into arr and filter consecutive duplicates then join
//     return str.split(' ').filter((w,i,a)=>w !== a[i-1]).join(' ')
// }

const removeDupeWords = str => str.split(' ').filter((w, i, a) => w !== a[i-1]).join(' ')

console.log(removeDupeWords("alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"), "alpha beta gamma delta alpha beta gamma delta")