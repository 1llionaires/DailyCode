// Define a function that takes an integer argument and returns a logical value true or false depending on if the integer is a prime.

// Per Wikipedia, a prime number ( or a prime ) is a natural number greater than 1 that has no positive divisors other than 1 and itself.

// Requirements
// You can assume you will be given an integer input.
// You can not assume that the integer will be only positive. You may be given negative numbers as well ( or 0 ).
// NOTE on performance: There are no fancy optimizations required, but still the most trivial solutions might time out. Numbers go up to 2^31 ( or similar, depending on language ). Looping all the way up to n, or n/2, will be too slow.

//P: integer
//R: check if the number is a prime number or not
//E: given 1, results false
//   given 2, results true
//   given -1, results false
//PC: create a function that returns false if num is less than 2
//    loop from 2 to num while being less than sqrt(num)
//    if number divided by i has no remainders it is not a prime
//   else return true
function isPrime(num) {
    if (num < 2) return false;
    const limit = Math.sqrt(num);
    for (let i = 2; i <= limit; ++i) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
}