// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

// Note: If the number is a multiple of both 3 and 5, only count it once.

//P: numbers
//R: find all mutiples of 3 and 5 below a number and sum them
//E: given 10, result 23
//   given 5, result 8
//   given 12, result 35
//PC: create a function that loops from 1-number and checks if its a mulitple of 3 or 5
//    add the integers to an array and sum them. return sum
function solution(number){
    let arr = []
    let mult = []
    for (let i=0;i<number;i++){
      arr.push(i)
    }
    for (let i=0;i<arr.length;i++){
      if(i%3===0 || i%5===0){
        mult.push(i)
      }
    }
      const sumTotal = mult.reduce((sum, a)=>sum+a,0)
    return sumTotal
}

//OR

function solution(number){
    var sum = 0;
    
    for(var i = 1;i< number; i++){
      if(i % 3 == 0 || i % 5 == 0){
        sum += i
      }
    }
    return sum;
}