// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

//P: string of characters
//R: return array with 1 of each unique character without changing the order
//E: given 'AAAABBBCCDAABBB', result ['A', 'B', 'C', 'D', 'A', 'B']
//   given 'ABBCcAD', result ['A', 'B', 'C', 'c', 'A', 'D']
//   given [1,2,2,3,3], result [1,2,3]
//PC: create a function that loops through the string to check if there are duplicates and push unique characters to new array
var uniqueInOrder=function(iterable){
    let arr = [];
    for (let i = 0; i < iterable.length; i++) {
      if (iterable[i] != iterable[i+1]){
          arr.push(iterable[i]);
      } 
    }return arr;
}