
// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:

// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].

// dup(["kelless","keenness"]) = ["keles","kenes"].

// Strings will be lowercase only, no spaces. See test cases for more examples.

// Good luck!


// function dupe(arr){
//     //map through each word and split then filter and join back together
//     return arr.map(word=>word.split('').filter((l,i,a)=>l !== a[i-1]).join(''))
// }

const dupe = arr => arr.map(word=>word.split('').filter((l,i,a)=>l !== a[i-1]).join(''))


console.log(dupe(["abracadabra","allottee","assessee"]),["abracadabra","alote","asese"])
console.log(dupe(["kelless","keenness"]),["keles","kenes"])
console.log(dupe(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])