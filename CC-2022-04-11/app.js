// This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"
// Good Luck!

//P: fighters
//R: conditional (single line?)
//E: Given GSP, return "I am not impressed by your performance."
//   Given McGregor, return "I'd like to take this chance to apologize.. To absolutely NOBODY!"
//PC: create a conditional that returns what the fighter will say after the fight depending on results

// Attempt 
// var quote = function(fighter){
//     if (fighter === 'George Saint Pierre'){
//         return ("I am not impressed by your performance.")
//     }else{
//         return ("I'd like to take this chance to apologize.. To absolutely NOBODY!")
//     }

// };

//Answer 

var quote = function (fighter){
    return fighter.toLowerCase === 'george saint pierre'? "I am not impressed by your performance":"I'd like to take this chance to apologize.. To absolutely NOBODY!"
}