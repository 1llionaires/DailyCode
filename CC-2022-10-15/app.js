// Complete the function so that it finds the average of the three scores passed to it and returns the letter value associated with that grade.

//P: will always be integers, no special char, no letters, no funny biz
//R: return a string containing a letter grade according to the average of scores in parameter and use the grading scale to assign appropriate grades
//E: given (95,90,93), result 'A'
//   given (70,70,100), result 'B'
//   given (75,70,79), result 'C'
//PC: create a function that averages the integers given as parameters 
//    use a conditional to check which letter grade should be assigned to the average
//    return a string with 'A-F' grade
function getGrade(s1,s2,s3){
    let avg = (s1 + s2 + s3) / 3;
    return avg <= 100 && avg >= 90 ? 'A' : avg < 90  && avg >= 80 ? 'B' : avg < 80  && avg >= 70 ? 'C' : avg < 70  && avg >= 60 ? 'D' : 'F';
}