// Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

//P: word
//R: return index of capital letters in the word
//E: given 'CodEWaRs', results [0,3,4,6]
//   given 'WaterLoo', results [0,5]
//   given 'MaRgauX', results [0,2,6]
//PC: create a function that splits the string into array and loops through the array
//    check to see if each letter is a capital or not. if the letter is a capital push the index to a new array
//    return new array
var capitals = function (word) {
    let arr = word.split('')
    let newArr = []
    for(let i=0;i<arr.length;i++){
      if(arr[i]===arr[i].toUpperCase()){
        newArr.push(i)
      }
    }return newArr
};