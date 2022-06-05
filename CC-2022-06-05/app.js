// Make a program that filters a list of strings and returns a list with only your friends name in it.

// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

//P: array (names)
//R: return new array with only name of friends (name = 4 char)
//E: given ["Ryan", "Kieran", "Jason", "Yous"], result ["Ryan", "Yous"]
//   given ["Ryan", "Kieran", "Mark"], result ["Ryan", "Mark"]
//   given ["Ryan", "Jimmy", "123", "4", "Cool Man"], result ["Ryan"]
//PC: create a function that loops through array and checks for names 4 char long
function friend(friends){
    let arr = []
    for(let i=0;i<friends.length;i++){
      if(friends[i].length===4){
        arr.push(friends[i])
      }
    }return arr
}

//OR
//filter method

function friend(friends){
    return friends.filter(n => n.length === 4)
}