//Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

//The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers should be represented as a string with 2 decimal places. (e.g. "21.00" NOT "21.0" or "21")

//P: usd
//R: convert usd to cny
//E: given 15 usd, result '101.25 Chinese Yuan'
//   given 465 usd, result '3138.75 Chinese Yuan'
//PC: create a function that takes in usd and converts to cny
//    need 2 decimal places after converting
function usdcny(usd,cny){
    cny = usd * 6.75
    cny = cny.toFixed(2)
    return cny + ' ' + 'Chinese Yuan'
}

//OR

function usdcny(usd) {
    return (usd * 6.75).toFixed(2)+ 'Chinese Yuan'
}