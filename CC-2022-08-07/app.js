// After a hard quarter in the office you decide to get some rest on a vacation. So you will book a flight for you and your girlfriend and try to leave all the mess behind you.

// You will need a rental car in order for you to get around in your vacation. The manager of the car rental makes you some good offers.

// Every day you rent the car costs $40. If you rent the car for 7 or more days, you get $50 off your total. Alternatively, if you rent the car for 3 or more days, you get $20 off your total.

// Write a code that gives out the total amount for different days(d).

//P: days
//R: return the total amount owed for different amount of days
//E: given 2, result 80
//   given 4, result 140
//   given 7 result 230
//PC: create a function that returns the total amount owed for the rental car with the discounts applied for different lengths of time periods
function rentalCarCost(d) {
    if(d>=3){
      return d*40-20
    }else if(d>=7){
      return d*40-50
    }else{
      return d*40
    }
  }