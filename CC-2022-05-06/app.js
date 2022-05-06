// Given an array of integers your solution should find the smallest integer.

//P: array
//R: find smallest integer in array
//E: given [34, 15, 88, 2], results 2
//   given [34, -345, -1, 100], results -345
//   given [78, 56, 232, 12, 8], results 8
//PC: create a function to sort the elements in array and return first element in array
class SmallestIntegerFinder {
    findSmallestInt(args) {
      args.sort((a,b)=>a-b)
      return args[0]
    }
}