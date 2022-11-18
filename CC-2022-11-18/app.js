// In this kata you should simply determine, whether a given year is a leap year or not. In case you don't know the rules, here they are:

// years divisible by 4 are leap years
// but years divisible by 100 are not leap years
// but years divisible by 400 are leap years
// Additional Notes:

// Only valid years (positive integers) will be tested, so you don't have to validate them
// Examples can be found in the test fixture.

//number (year), no letters, special char, no funny biz
//return whether the year given in params is a leap year or not

// function isLeapYear(year){
//     //use a conditonal to check if year is divisble by 4 but not 100
//     //also check if the year is divisible by 400
//     return (year % 4 ===0 && year % 100 !== 0) || year % 400 === 0
// }

const isLeapYear = year => (year % 4 ===0 && year % 100 !== 0) || year % 400 === 0

console.log(isLeapYear(1234),false)
console.log(isLeapYear(1984),true)
console.log(isLeapYear(2000),true)