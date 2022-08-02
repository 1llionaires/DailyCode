// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

//P: string
//R: check if the string has two repeating letters consecutive or not
//E: given "Dermatoglyphics",results true
//   given "aba",results false
//   given "moOse",results false
//PC: create a function that turns the string to lowercase and array, sort the array
//    loop through the array and compare each element to the next if there are duplicates return false else true
function isIsogram(str){
    let arr = str.toLowerCase().split("").sort();
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] == arr[i + 1]) return false;
    }
    return true;
}