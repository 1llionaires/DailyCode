// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//P:string of numbers
//R: return lowest and highest numbers in the string
//E: given "1 2 3 4 5", result "5 1"
//   given "1 9 3 4 -5", result "9 -5"
//   given "1 2 -3 4 5", result "5 -3"
//PC: create a function to convert string to array
//    sort the array in ascending order
//    return string with highest and lowest number
function highAndLow(numbers){
let arr=numbers.split(' ');
 let sorted=arr.sort(function(a,b){
   return Number(a) - Number(b);
 });
 return sorted[sorted.length - 1] + " " + sorted[0];
}