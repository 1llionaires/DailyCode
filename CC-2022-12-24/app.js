// Complete the function which takes two arguments and returns all numbers which are divisible by the given divisor. First argument is an array of numbers and the second is the divisor.

// Example(Input1, Input2 --> Output)
// [1, 2, 3, 4, 5, 6], 2 --> [2, 4, 6]

//array of integers no letters or special char
//find numbers that are divisble by the given divisor
//given [1, 2, 3, 4, 5, 6], 2 results [2, 4, 6]
//given [1, 2, 3, 4, 5, 6], 3 results [3, 6]
//filter the array to leave just the numbers divisble by divisor

function divisibleBy(numbers, divisor) {
    return numbers.filter(n => n % divisor === 0)
}