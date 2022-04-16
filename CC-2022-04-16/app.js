// An NBA game runs 48 minutes (Four 12 minute quarters). Players do not typically play the full game, subbing in and out as necessary. Your job is to extrapolate a player's points per game if they played the full 48 minutes.

// Write a function that takes two arguments, ppg (points per game) and mpg (minutes per game) and returns a straight extrapolation of ppg per 48 minutes rounded to the nearest tenth. Return 0 if 0.

//P: ppg, mpg
//R: find points per 48 minutes
//E: given (10,10), results 48
//   given (12,20), results 28.8
//   given (0,0), results 0
//PC: create a function to get points per 48 using ppg and mpg
//    given (0,0) returns 0
function pointsPer48(ppg, mpg) {
    minutes = 48/mpg
    per48 = minutes * ppg
      return Number(per48.toFixed(1)) || 0
    }