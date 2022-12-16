// You might know some pretty large perfect squares. But what about the NEXT one?

// Complete the findNextSquare method that finds the next integral perfect square after the one passed as a parameter. Recall that an integral perfect square is an integer n such that sqrt(n) is also an integer.

// If the parameter is itself not a perfect square then -1 should be returned. You may assume the parameter is non-negative.

//numbers no letters or special chars, no funny biz
//if the parameter is a perfect square return the next perfect square by adding 1 to the sqrt or return -1 if not a perfect square
//given 121, results 144
//given 625, results 676
//given 114, results -1
//if the sqrt of the number is an integer add 1 the the sqrt and square the number, else return -1
function findNextSquare(sq) {
    return Math.sqrt(sq) % 1 === 0 ? (Math.sqrt(sq) + 1)**2 : -1;
}