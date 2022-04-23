// You are given the length and width of a 4-sided polygon. The polygon can either be a rectangle or a square.
// If it is a square, return its area. If it is a rectangle, return its perimeter.

//P: length and width
//R: if l = w return l*w, if l!=w return 2*(l+w)
//E: given (6,10), return 32
//   given (3,3). return 9
//   given (5,4), return 18
//PC: create a function that returns area if square and perimeter if rectangle
const areaOrPerimeter = function(l,w){
    return l===w? l*w : 2*(l+w)
}