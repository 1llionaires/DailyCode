// Rock Paper Scissors
// Let's play! You have to return which player won! In case of a draw return Draw!.

// Examples:

// rps('scissors','paper') // Player 1 won!
// rps('scissors','rock') // Player 2 won!
// rps('paper','paper') // Draw!

// P: p1 and p2
// R: Conditional p1 win/p2 win/draw
// E: Given 'scissors','paper', should return p1 win
//    Given 'rock','rock' should return draw
//    Given 'scissor','rock', should return p2 win
// PC: create a conditional that returns the results of the match
    const rps = (p1, p2) => {
        if (p1==='scissors' && p2==='paper'){
            return "Player 1 Wins!"
        }else if (p1==='paper' && p2==='rock'){
            return "Player 1 Wins!"
        }else if (p1==='rock' && p2==='scissors'){
            return "Player 1 Wins!"
        }else if (p1===p2){
            return "Draw"
        }else{
            return "Player 2 Wins!"
        }
    };
