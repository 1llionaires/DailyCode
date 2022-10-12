// Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, then print out "Fizz";  when it's divisible by 5, print out "Buzz"; when it's divisible by both 3 and 5, print out "FizzBuzz"

//num with not funny bizz
//log each num or the appr word
//n=5 -> 1, 2, "Fizz", 4, "Buzz"
//n=9 ->  1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8 , "Fizz"
//n=15 -> 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8 , "Fizz" , "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"

function fizzBuzz(num){
    //for loop from 1 to num
    for (let i = 1; i<=num; i++){
        //conditional 
            //if num % 3 && num %5 === 0 -> "FizzBuzz"
            if(i % 3=== 0 && i % 5=== 0){
                console.log('FizzBuzz')
            }
            //if num % 3 === 0 -> "Fizz"
            else if (i % 3 === 0){
                console.log('Fizz')
            }
            //if num % 5 === 0 -> "Buzz"
            else if (i % 5 === 0){
                console.log('Buzz')
            }
            // else log num
            else{
                console.log(i)
            }
    }
    
}


fizzBuzz(5) // 1, 2, "Fizz", 4, "Buzz"
fizzBuzz(9) // 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8 , "Fizz"
fizzBuzz(15) // 1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8 , "Fizz" , "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"