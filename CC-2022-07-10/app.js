// Story
// Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

// Task
// Your mission:
// Write a function called checkCoupon which verifies that a coupon code is valid and not expired.

// A coupon is no more valid on the day AFTER the expiration date. All dates will be passed as strings in this format: "MONTH DATE, YEAR".

//P: 2 codes and 2 dates
//R: check if the codes are matching and the date is before expiration
//E: given ("123", "123", "July 9, 2015", "July 9, 2015"), results true
//   given ("123", "123", "July 9, 2015", "July 2, 2015"), results  false
//   given ("123a", "123", "July 9, 2015", "July 10, 2015"), results  false
//PC: create a function that checks the coupon codes and expiration dates are valid
function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
}