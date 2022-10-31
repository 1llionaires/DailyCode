// Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

// Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)

// If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
// If he doesn't get 10 hoops, return the string "Keep at it until you get it".

// given integer, never empty or negative, no letters, or special char
// return a different string depending on the value of the integer if less than 10 "Keep at it until you get it" and more than 10 "Great, now move on to tricks"
// create a function using a boolean check the value of the parameter if its less than 10 return "Keep at it until you get it", else "Great, now move on to tricks"

function hoopcount(n){
    return n<10?"Keep at it until you get it":"Great, now move on to tricks"
}

console.log(hoopCount(1),"Keep at it until you get it")
console.log(hoopCount(11),"Great, now move on to tricks")
console.log(hoopCount(0),"Keep at it until you get it")