// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.

//string no numbers, special char, or funny biz
//return 18 if name inside string is "Zach" and return 0 for everyone else

// function countLightSaber(name){
//     return name==="Zach"?18:0
// }

const countLightSaber = name => name==="Zach"?18:0

console.log(countLightSaber("Zach"),18)
console.log(countLightSaber("Michael"),0)
console.log(countLightSaber("Leon"),0)