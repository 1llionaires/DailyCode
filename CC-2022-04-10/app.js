// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

//P: time
//R: using time cycled calculate water nathan will drink
//E: given time = 3, results 1L
//   given time = 6.7, results 3L
//   given time = 11.8, results 5L
//PC: create a function using time to find water drank(L)
//    round to smallest value
function litres(time) {
    hydrate = time * 0.5
    if(hydrate<1){
      return 0
    }else{
      return Math.trunc(hydrate)
    }   
}

//OR

function litres(time) {
    return Math.floor(time * 0.5);
}