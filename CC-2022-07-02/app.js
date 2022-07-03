// Implement a function that accepts 3 integer values a, b, c. The function should return true if a triangle can be built with the sides of given length and false in any other case.

// (In this case, all triangles must have surface greater than 0 to be accepted).

//P: three integers
//R: return a boolean to check whether the integers given can be formed into a triangle or not
//E: given (7,2,2), results false
//   given (1,2,2), results true
//   given (3,4,5). results true
//PC: create a function using a boolean to check if a+b>c, b+c>a, and c+a>b
function isTriangle(a,b,c){
   return a + b > c && a + c > b && c + b > a;
}