// Finish the uefaEuro2016() function so it return string just like in the examples below:

//P: teams and scores
//R: return a string with teams playing and result
//E: given ['Germany', 'Ukraine'],[2, 0], result "At match Germany - Ukraine, Germany won!"
//   given ['Belgium', 'Italy'],[0, 2], result "At match Belgium - Italy, Italy won!"
//   given ['Portugal', 'Iceland'],[1, 1], result "At match Portugal - Iceland, teams played draw."
// PC: create a function to compare 2 array elements and return string depending on comparison

function uefaEuro2016(teams, scores){
    if (scores[0]>scores[1]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[0]} won!`
    }else if(scores[1]>scores[0]){
      return `At match ${teams[0]} - ${teams[1]}, ${teams[1]} won!`
    }else{
      return `At match ${teams[0]} - ${teams[1]}, teams played draw.`
    }
}