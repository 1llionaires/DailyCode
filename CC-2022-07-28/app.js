// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

//P: year
//R: given the year, return the century its in
//E: given 1705, results 18
//   given 1900, results 19
//   given 1601, results 17
//PC: create a function to round up the year divided by 100
function century(year) {
    return Math.ceil(year / 100);
}