// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

//P: color of light (string)
//R: depending on current color of light update to the next color when function is called
//E: given 'green', result 'yellow'
//   given 'yellow', result 'red'
//   given 'red', result 'green'
//PC: create a function that updates the color of traffic light 
function updateLight(current) {
    return current === 'green' ? 'yellow' : 
           current === 'yellow' ? 'red' : 'green';
  
}