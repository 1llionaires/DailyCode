// In this Kata, you will be given an array of numbers in which two numbers occur once and the rest occur only twice. Your task will be to return the sum of the numbers that occur only once.

// repeats([4,5,7,5,4,8]),15)
// repeats([9, 10, 19, 13, 19, 13]),19)
// repeats([16, 0, 11, 4, 8, 16, 0, 11]),12)
// repeats([5, 17, 18, 11, 13, 18, 11, 13]),22)
// repeats([5, 10, 19, 13, 10, 13]),24)

//array of nums, no letters, special chars, or empty arrays, no funny biz
//return the sum of numbers that occur once in the array
//create a function that filters the array of duplicates where index of num is last index of num
//return the array reduced
function repeats(arr){
    return arr.filter(n=>arr.indexOf(n)===arr.lastIndexOf(n)).reduce((a,c)=>a+c)
}

console.log(repeats([4,5,7,5,4,8]),15)
console.log(repeats([9, 10, 19, 13, 19, 13]),19)