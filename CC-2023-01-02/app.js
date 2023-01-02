
// Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given 
//   or `name` = ""        => return "Hello, World!"


//string, can be empty, can be number, or undefined
//return string with name correctly capitalized or world if name doesnt contain letters
//given JoHn, results 'Hello, John!'
//given '0', results 'Hello, World!'
//given '', results 'Hello, World!'
//capitalize first letter and make everything else lowercase if name is valid or else 'Hello, World!'

function hello(name) {
    return `Hello, ${name ? name[0].toUpperCase() + name.slice(1).toLowerCase() : "World"}!`
  }