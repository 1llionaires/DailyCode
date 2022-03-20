// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

//P: number(n)
//R: return array up to and including n and excluding zero
//E: given 1, return [1]
//   given 3, return [1,2,3]
//   given 5, return [1,2,3,4,5]
//PC: create a function that creates an array of numbers 1 to n
function monkeyCount(n){
    let arr = [];
    for(let i = 1; i <= n; i++) {
      arr.push(i);
    }
    return arr;
}