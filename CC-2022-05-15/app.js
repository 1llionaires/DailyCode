// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS, Go, Java and Julia), "$" (C#, C++, Ruby, Clojure, Elixir, PHP, Python, Haskell and Lua) or "¥" (Rust).

//P: salary,bonus
//R: if bonus == true return salary * 10 else return salary
//E: given (£10000,true), result £100000
//   given (£100000,false), result £100000
//   given (£10,true), result £100
//PC: create a function that multiplies the salary by 10 if bonus is true and returns salary if bonus is false
function bonusTime(salary, bonus) {
    let bags = 10*salary
    return bonus === true ? "£"+bags:"£"+salary
}

//OR

function bonusTime(salary, bonus) {
    let bags = 10*salary
    return bonus === true ? "£"+bags:"£"+salary
}