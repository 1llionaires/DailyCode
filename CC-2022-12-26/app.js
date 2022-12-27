// In this simple exercise, you will build a program that takes a value, integer , and returns a list of its multiples up to another value, limit . If limit is a multiple of integer, it should be included as well. There will only ever be positive integers passed into the function, not consisting of 0. The limit will always be higher than the base.

// For example, if the parameters passed are (2, 6), the function should return [2, 4, 6] as 2, 4, and 6 are the multiples of 2 up to 6.

//2 params int and lim
//find all multiples between int and lim
//given [5,15], result [5,10,15]
//given [2,6], results [2,4,6]
//create a function with an empty arr
//loop through the param and check if i%int===0
//if true push to empty arr and return arr


function findMultiples(integer, limit) {
    let arr = [];
    for (let i = integer; i <= limit; i++) {
        if (i % integer === 0) {
            arr.push(i);
        }
    } 
    return arr;
}
