// In a small town the population is p0 = 1000 at the beginning of a year. The population regularly increases by 2 percent per year and moreover 50 new inhabitants per year come to live in the town. How many years does the town need to see its population greater or equal to p = 1200 inhabitants?

//P: p0, percent, aug(number of inhabitants coming or leaving), p(target population)
//R: return how many years it will take the current population to reach the target population numbers with the growth rate given
//E: given (1000,0.02,50,1200), results 3 years
//   given (1500, 5, 100, 5000), results 15 years
//   given (1500000, 2.5, 10000, 2000000), results 10 years
//PC: create a function that uses a while loop (sum<p) the sum = the population growth at the end of one year
//    store the sum in p0 and add one year everytime the function runs
function nbYear(p0, percent, aug, p) {
    let sum = 0
    let years = 0
    while(sum<p){
      sum = Math.floor(p0+p0*(percent/100)+aug)
      p0=sum
      years++
    }return years
}