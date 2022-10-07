// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.

// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

//P: number
//R: return the amount in the parameter in dollar and cent form in a string
//E: given 3, result '$3.00'
//   given 3.1, result '$3.10'
//   given 72, result '$72.00'
//PC: create a function that returns number in a string with a dollar sign and use toFixed() add zeros to the hundredth place if none are currently present 
function formatMoney(amount){
    return `$${amount.toFixed(2)}`;
}