// Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.

//P: array of integers
//R: return the array of integers in phone number format as a string
//E: given [1, 2, 3, 4, 5, 6, 7, 8, 9, 0], result "(123) 456-7890"
//   given [1, 1, 1, 1, 1, 1, 1, 1, 1, 1], result "(111) 111-1111"
//   given [0, 9, 8, 7, 6, 5, 4, 3, 2, 1], result "(098) 765-4321"
//PC: create three empty string variables
//    loop through the array
//    use conditionals for each part of the phone number (i>3),(i>=3&&i<6)(i>=6)
//    return phone number
function createPhoneNumber(numbers){
    let first = "";
    let second = "";
    let third = "";
    for (let i = 0; i< numbers.length; i++){
      if(i < 3) {
        first += numbers[i].toString()
      } else if (i >= 3 && i < 6) {
        second += numbers[i].toString();
      } else if (i >= 6){
        third += numbers[i].toString()
      }
    }
    return `(${first}) ${second}-${third}`
}

//OR

function createPhoneNumber(numbers){
    var format = "(xxx) xxx-xxxx";
    
    for(var i = 0; i < numbers.length; i++)
    {
      format = format.replace('x', numbers[i]);
    }
    
    return format;
}