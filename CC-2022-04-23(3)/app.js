// Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

//P: n = classmates m = pages
//R: if n and m > 0 return n*m else return 0
//E: given (5,5), return 25
//   given (-5,5), return 0
//PC: create a function with conditional to check for negative
function paperwork(n, m) {
  return (n < 0 || m < 0) ? 0 : n * m
}
