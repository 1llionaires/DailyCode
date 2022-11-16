// Prolog:
// This kata series was created for friends of mine who just started to learn programming. Wish you all the best and keep your mind open and sharp!

// Task:
// Write a function that will accept two parameters: variable and type and check if type of variable is matching type. Return true if types match or false if not.

//variable and type parameter, can be numbers or letters, never empty, no funny biz
//return a boolean to check if the variable and type match up correctly or not

console.log(typeValidation(42,'number'),true)
console.log(typeValidation('42','number'),false)
console.log(typeValidation('21',string),true)

// function typeValidation(variable,type){
//     //find the typeof variable and compare to type parameter
//     return typeof variable === type 
// }

const typeValidation = (variable, type) => typeof variable === type 