// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an item.

//P: array of names
//R: return a string with the names contained in the array showing who liked the post
//E: given [], result 'no one likes this'
//   given ["Peter"], result 'Peter likes this'
//   given ["Alex", "Jacob", "Mark", "Max"], result 'Alex, Jacob and 2 others like this'
//PC: create a function with conditionals to check the array 
//    return a string with the names in the array showing who liked the post
function likes(names) {
    if(names.length === 0){
      return 'no one likes this'
    }
    else if(names.length ===1){
      return `${names[0]} likes this`
    }
    else if(names.length ===2){
      return `${names[0]} and ${names[1]} like this`
    }
    else if(names.length ===3){
      return `${names[0]}, ${names[1]} and ${names[2]} like this`
    }
    else if(names.length > 3){
      return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
    }      
}