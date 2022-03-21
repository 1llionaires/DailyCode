// Very simple, given an integer or a floating-point number, find its opposite.

//P: integer
//R: return the oppositve value of the integer ie positive => negative vice versa
//E: given 1, result -1
//   given 14, result -14
//   given -34, result 34
//PC: create a function that returns the opposite value of the integer
function opposite(number) {
    if(number > 0) {
       return -number;
    } else if(number < 0 ) {
      return Math.abs(number);
    }
    return number;
}

//OR

function opposite(number) {
    return(-number);
  }
