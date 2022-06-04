// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

//P: string 
//R: check string if there are same number of 'x's and 'o's 
//E: given 'xo', result true
//   given 'xooxx, result false
//   given 'ooxXm', result true
//PC: create a function to loop through the string and check for x's and o's and compare them

function XO(str) {
    let x = 0;
    let o = 0;
    for (let i = 0; i < str.length; i++) {
      if (str[i].toLowerCase() === 'x') {
        x += 1;
      } else if (str[i].toLowerCase() === 'o') {
          o += 1;
      }
    }
    return x === o;
}