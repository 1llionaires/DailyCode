// There was a test in your class and you passed it. Congratulations!
// But you're an ambitious person. You want to know if you're better than the average student in your class.

// You receive an array with your peers' test scores. Now calculate the average and compare your score!

// Return True if you're better, else False!

//P: array of class scores and my score
//R: find avg of class scores and compare to my score if class score < my score return true else false
//E: given ([2,3],5), result true
//   given ([100, 40, 34, 57, 29, 72, 57, 88],75), result true
//   given ([12, 23, 34, 45, 56, 67, 78, 89, 90], 9), result false
//PC: create a function to find avg of array elements and compare to my score 
function betterThanAverage(classPoints, yourPoints) {
    let avg = classPoints.reduce((a,b)=>a+b)/classPoints.length
    return avg<yourPoints? true :false
}