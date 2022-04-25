// You are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

//P: 2 interior angles
//R: find the value of third angle in a triangle
//E: given (30,60), result 90
//   given (60,60), result 60
//   given (10,20), result 150
//PC: create a function that gives the value of missing angle in a triangle
function otherAngle(a,b){
    return 180-(a+b);
}