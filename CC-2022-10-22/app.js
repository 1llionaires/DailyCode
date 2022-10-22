// Write a function named setAlarm which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// setAlarm(true, true) -> false
// setAlarm(false, true) -> false
// setAlarm(false, false) -> false
// setAlarm(true, false) -> true

//booleans will be the parameters the first one is employment status and the second is whether the person is on vacation or not, always a boolean, never empty, and no funny biz
//return a boolean for whether the alarm needs to go off or not depending on the person's employment and vacation status
//create a function that takes in two paramenters
//use a conditional to check the employment and vacation status of the person
//if employed and not on vacation return true
//else return false

// function setAlarm(employed, vacation){
//     return employed===true&&vacation===false? true : false
// }

const setAlarm = (employed, vacation) => employed && !vacation;
