// Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

//P: name
//R: return "Hello, + name", if name === Johnny return "Hello, my love!"
//E: given Jim, return "Hello, Jim"
//   given Jane, return "Hello, Jane"
//   given Johhny, reutrn "Hello, my love!" 
//PC: create a function with a conditional to check if name is Johnny and return greeting
function greet(name){
  return name === "Johnny" ? "Hello, my love!" : `Hello, ${name}!`;
}