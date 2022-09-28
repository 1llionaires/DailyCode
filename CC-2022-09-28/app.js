// Create a method sayHello/say_hello/SayHello that takes as input a name, city, and state to welcome a person. Note that name will be an array consisting of one or more values that should be joined together with one space between each, and the length of the name array in test cases will vary.

//P: array with full name, city, state
//R: return a string 'Hello, full name! Welcome to city, state!'
//E: given (['John', 'Smith'], 'Phoenix', 'Arizona'), results 'Hello, John Smith! Welcome to Phoenix, Arizona!'
//   given (['Franklin','Delano','Roosevelt'], 'Chicago', 'Illinois'), results 'Hello, Franklin Delano Roosevelt! Welcome to Chicago, Illinois!'
//   given (['Wallace','Russel','Osbourne'],'Albany','New York'), results 'Hello, Wallace Russel Osbourne! Welcome to Albany, New York!'
//PC: create a function that returns the string with the name array joined with a space in between and add it city and state params to str
function sayHello( name, city, state ) {
    return 'Hello, '+name.join(' ')+`! Welcome to ${city}, ${state}!`
}