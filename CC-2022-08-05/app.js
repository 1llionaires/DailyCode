// You were camping with your friends far away from home, but when it's time to go back, you realize that your fuel is running out and the nearest pump is 50 miles away! You know that on average, your car runs on about 25 miles per gallon. There are 2 gallons left.

// Considering these factors, write a function that tells you if it is possible to get to the pump or not.

// Function should return true if it is possible and false if not.

//P: distanceToPump, mpg, fuelLeft
//R: distanceToPump <= mpg * fuelLeft?
//E: given (50, 25, 2), result true
//   given (100, 50, 1), result false
//   given (20, 10, 2), result true\
//PC: create a function that checks if distance to the pump is less than or equal to mpg multiplied by fuel left
const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump <= mpg*fuelLeft