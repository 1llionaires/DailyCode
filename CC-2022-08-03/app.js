// Messi goals function
// Messi is a soccer player with goals in three leagues:

// LaLiga
// Copa del Rey
// Champions
// Complete the function to return his total number of goals in all three leagues.

// Note: the input will always be valid.

//P: LaLiga, Copa del Rey, Champions goals
//R: return the total sum of all Messi's goals
//E: given (5, 10, 2), results  17
//   given (0, 0, 0), results 0
//   given (20, 5, 5), results 30
//PC: create a function to add all parameters
function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {
    return laLigaGoals + copaDelReyGoals + championsLeagueGoals;
}