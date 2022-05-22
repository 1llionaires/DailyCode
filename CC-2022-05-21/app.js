// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

//P: integer
//R: return digits of integer in an array in reverse order
//E: given 123, return [3,2,1]
//   given 34567, return [7,6,5,4,3]
//   given 0, return [0]
//PC: create a function to separate digits into array and reverse the order
function digitize(n) {
    return Array.from(String(n), Number).reverse();
}