// Make a function that returns the value multiplied by 50 and increased by 6. If the value entered is a string it should return "Error".

//string or number, not empty, no funny biz
//return if number multiplied by 50 and increased by 6 and "Error" if it is a string
//create a function that checks if parameter is a string or number
//if parameter is a string return "Error"
//else return the number time 50 plus 6

// function problem (x){
//     return x===x.toString()?"Error":x*50+6
// }

const problem = x => typeof x === "string"? "Error" : x * 50 + 6

console.log(problem("hello"),"Error")
console.log(problem(1),56)
console.log(problem(""),"Error")