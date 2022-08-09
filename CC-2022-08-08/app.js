// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

//P: name, owner
//R: if name is equal to owner return 'hello boss' else return 'hello guest'
//E: given name===owner, results 'hello boss'
//   given name=/owner, results 'hello guest'
//PC: create a function that returns appropriate string depending on input
function greet (name, owner) {
    return name === owner ? 'Hello boss' :  'Hello guest';
  }