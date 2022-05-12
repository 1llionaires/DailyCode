// Build a function that returns an array of integers from n to 1 where n>0.

//P: number
//R: return an array of integers in descending order
//E: given 5, return [5,4,3,2,1]
//   given 3, return [3,2,1]
//   given 10, return [10,9,8,7,6,5,4,3,2,1]
//PC: create a function using a loop in reverse to return an array in descending order
const reverseSeq = n => {
    let arr = [];
      for (let i=n; i>0; i--) {
        arr.push(i);
        } return arr;
};