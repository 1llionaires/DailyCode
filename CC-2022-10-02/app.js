// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').

//P: string
//R: return the string split up with two characters in each element of the array and if there is an element with one character fill it in with an underscore
//E: given "abcdef", result  ["ab", "cd", "ef"]
//   given "abcdefg", result ["ab", "cd", "ef", "g_"]
//   given "", result []
//PC: create a function and create a result array
//    create another variable to store the split string as an array
//    loop through the array in increments of two
//    use a conditional to check if there is an arr[i+1] if true push the elements into result array
//    else push arr[i]+underscore
//    return the result var
function solution(str){
    let result = []
   let arr = str.split("")
   for(let i = 0; i<arr.length; i += 2){
      if(arr[i+1]) result.push(arr[i]+arr[i+1])
      
      else result.push(arr[i]+'_')
    }
   return result
}