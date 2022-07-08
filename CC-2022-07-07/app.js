// When it's spring Japanese cherries blossom, it's called "sakura" and it's admired a lot. The petals start to fall in late April.

// Suppose that the falling speed of a petal is 5 centimeters per second (5 cm/s), and it takes 80 seconds for the petal to reach the ground from a certain branch.

// Write a function that receives the speed (in cm/s) of a petal as input, and returns the time it takes for that petal to reach the ground from the same branch.

// Notes:

// The movement of the petal is quite complicated, so in this case we can see the velocity as a constant during its falling.
// Pay attention to the data types.
// If the initial velocity is non-positive, the return value should be 0

//P: velocity
//R: how many seconds it takes for a different petal to fall from the same branch(height)
//E: given 5, results 80
//   given 10, results 40
//   given -1, results 0
//PC: create a function to calculate how many seconds it takes for a petal to fall to the ground
const sakuraFall = v => v>0 ? 400 / v : 0 ;