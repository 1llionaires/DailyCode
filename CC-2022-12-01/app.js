// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 2, print out “Fizz”; when it’s divisible by 3, print out “Buzz”; when it’s divisible by both 2 and 3, print out “Fizz Buzz”.

//number n, no negatives, no letters or special char, no funny biz
//return 1 to n where factor of 2 print "Fizz", factors of 3 print "buzz" and factors of both print "FizzBuzz"

function fizzBuzz(n){
    let output = []
      for (let i = 1; i<=n;i++){
          if (i%6===0){
              output.push( "FizzBuzz")
          }else if (i%2===0){
              output.push( "Fizz")
          }else if (i%3===0){
              output.push( "Buzz")
          }else{
              output.push( i )
          }
      }return output
  }


console.log(fizzBuzz(10),[1,"Fizz","Buzz","Fizz",5,"FizzBuzz",7,"Fizz","Buzz","Fizz"])