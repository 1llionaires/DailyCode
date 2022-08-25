// In this exercise, a string is passed to a method and a new string has to be returned with the first character of each word in the string.

//P: string
//R: return a new string with only the first letter of each word
//E: given "sees eyes xray yoat", results "sexy"
//   given "brown eyes are nice", results "bean"
//   given "This Is A Test", results "TIAT"
//PC: create a new function that splits string into arr and map the first character of each element and join the new array into string
function makeString(s){
    return s.split(' ').map((arr)=>arr[0]).join('')
}