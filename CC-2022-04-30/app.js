// Your friend has been out shopping for puppies (what a time to be alive!)... He arrives back with multiple dogs, and you simply do not know how to respond!

// By repairing the function provided, you will find out exactly how you should respond, depending on the number of dogs he has.

// The number of dogs will always be a number and there will always be at least 1 dog.

//P: numbers 
//R: find the bugs that are stopping the code from working properly
//E: given 26, results "More than a handful!"
//   given 8, "Hardly any"
//   given 101. ""101 DALMATIANS!!!""
//PC: find the bugs and fix the function (create a function with conditional to send a response depending on number of puppies)
function howManyDalmatians(number) {
    return number <= 10 ? "Hardly any" : number <= 50 ? "More than a handful!": number === 101 ? "101 DALMATIANS!!!" : "Woah that's a lot of dogs!"
  }