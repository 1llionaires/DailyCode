// Implement a function named generateRange(min, max, step), which takes three arguments and generates a range of integers from min to max, with the step. The first integer is the minimum value, the second is the maximum of the range and the third is the step. (min < max)

//P: integers (min,max,step)
//R: return array of integers ranging from min to max increasing at step value
//E: given (2, 10, 2), result [2,4,6,8,10]
//   given (1, 10, 3), result [1,4,7,10]
//   given (5, 30, 5), result [5,10,15,20,25,30]
//PC: create a function that creates an array and pushes integers using a loop
function generateRange(min, max, step){
    let arr = [];
    for (let i=min; i<=max; i += step) {
      arr.push(i);
    }
    return arr;
}