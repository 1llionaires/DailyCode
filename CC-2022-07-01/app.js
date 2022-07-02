// This time no story, no theory. The examples below show you how to write function accum

//P: string
//R: for each character in the string repeat each character by the total length of the string separate each character with a "-"
//E: given "abcd", results "A-Bb-Ccc-Dddd"
//   given "RqaEzty", results "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
//   given "cwAt", results "C-Ww-Aaa-Tttt"
//PC: create a function that creates a variable with the string in lowercase
//    loop through the string and the characters in the string
//    loop through the string again and add the lowercase variable for each time the string gets longer
//    push the new string into an array
//    return the arr as a string by joining the elements with a "-"
function accum(s) {
    let arr = []
    let lowerCase = s.toLowerCase()
    for (let i=0;i<lowerCase.length;i++){
      let str = lowerCase[i].toUpperCase()
      for(let j=0;j<i;j++){
        str += lowerCase[i]
      } arr.push(str)
    }return arr.join('-')
}