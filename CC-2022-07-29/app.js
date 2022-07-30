// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

//P: (hours, minutes, seconds)
//R: return time since midnight in milliseconds
//E: given (0,1,1), results 61000
//   given (1,1,1), results 3661000
//   given (1,0,1), results 3601000
//PC: create a function that takes how many hours minutes and seconds its been from midnight
//    return (3600h+6000m+s)x1000 
function past(h, m, s){
    return (h*3600+m*60+s)*1000
}