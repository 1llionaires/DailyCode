// It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.

// Return the average of the given array rounded down to its nearest integer.

// The array will never be empty.

//P: array of integers
//R: return average of integers in the array to and round down to nearest integer
//E: given [2,2,2,2],results 2
//   given [1,2,3,4,5,],results 3
//   given [1,1,1,1,1,1,1,2],results 1
//PC: create a function that finds the average of the integers in the array and round down to nearest integer
function getAverage(marks){
    let total = marks.reduce((a,b)=>a+b)
    return Math.floor(total/marks.length)
}