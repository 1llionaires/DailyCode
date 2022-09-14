// Return an array containing the numbers from 1 to N, where N is the parametered value.

// Replace certain values however if any of the following conditions are met:

// If the value is a multiple of 3: use the value "Fizz" instead
// If the value is a multiple of 5: use the value "Buzz" instead
// If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead
// N will never be less than 1.

//P: number
//R: return "Fizz" if number is a multiple of 3, "Buzz" if multiple of 5 and "FizzBuzz" if multiples of 3 & 5 else just return the number
//E: given 3, results [1,2,"Fizz"]
//   given 5, results [1,2,"Fizz",4,"Buzz"]
//   given 9, results [1,2,"Fizz",4,"Buzz","Fizz",7,8,"Fizz"]
//PC: create a function that creates a new array for the results
//    loop through the number starting from 1 and use a conditional
//    if i%15==0 then push "FizzBuzz" to the result array
//    else if i%5==0 then push "Buzz" to the result array
//    else if i%3==0 then push "Fizz" to the result array
//    else push i and return the array with the result
function fizzbuzz(n){
    let array = []
    for(let i=1;i<=n;i++){
      if(i%15===0){
      array.push('FizzBuzz')
      }else if(i%3===0){
      array.push('Fizz')
      }else if (i%5===0){
      array.push('Buzz')
      }else{
      array.push(i)
      }
    }return array
}