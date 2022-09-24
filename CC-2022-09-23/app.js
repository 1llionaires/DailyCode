// Write a function insert_dash(num) / insertDash(num) / InsertDash(int num) that will insert dashes ('-') between each two odd digits in num. For example: if num is 454793 the output should be 4547-9-3. Don't count zero as an odd digit.

// Note that the number will always be non-negative (>= 0).

//P: number
//R: return a string containing the number with dashes in between two adjacent odd integers
//E: given 454793, results '4547-9-3'
//   given 91826456, results '9-1826456'
//   given 923857617, results '92385-761-7'
//PC: create a function with an empty array variable
//    turn the number into a string and split it into an array
//    loop through the array and push the all the integers into the new empty array
//    use a conditional to check for adjacent odd integers and insert a '-' between them
//    return the result array and join into a string
function insertDash(num) {
    let result =[]
    let arr = num.toString().split('')
    for(let i=0;i<arr.length;i++){
      result.push(arr[i])
      if(arr[i]%2&&arr[i+1]%2){
        result.push('-')
      }
    }return result.join('')
}