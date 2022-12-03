// Task
// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor
// N is less than or equal to bound
// N is greater than 0.

// Notes
// The parameters (divisor, bound) passed to the function are only positive values .
// It's guaranteed that a divisor is Found.
// Input >> Output Example
// maxMultiple (2,7) ==> return (6)
// Explanation:
// (6) is divisible by (2) , (6) is less than or equal to bound (7) , and (6) is > 0 .

//bound integer and divisor integer, no letters, no negatives, no special char, no funny biz
//return the highest number that is divible by the divisor but smaller that the bound

function maxMultiple(divisor,bound){
    return bound-bound%divisor
}

console.log(maxMultiple(2,7),6)
console.log(maxMultiple(7,100),98)