// Write a function called repeatStr which repeats the given string string exactly n times.

//P: string and number
//R: repeat string (n) number of times
//E: given (6, "I"), result "IIIIII"
//   given (5, "Hello"), result "HelloHelloHelloHelloHello"
//   given (3, "*"), result "***"
//PC: create a function that repeats string n number of times

function repeatStr (n, s) {
    return s.repeat(n)
}