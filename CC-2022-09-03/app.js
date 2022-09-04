// What we want to implement is Array.prototype.filter() function, just like the existing Array.prototype.filter(). Another similar function is _.filter() in underscore.js and lodash.js.

//P: number
//R: return filtered elements in the array with an index that is less than the number
//E: given [1,2,3,4,5], num =3, results [4,5]
//   given [11,22,34,56], num =2, results [34,56]
//   given [1,4,5], num = 2, results [5]
//PC: create a function with a result variable with an empty array
//    loop through the array and use a callback function to filter out the arr and push wanted elements to result arr
//    return result
Array.prototype.filter = function(func) {
    let result = [];
        
    for (let i = 0; i < this.length; i++) {
      if (func(this[i])) {
        result.push(this[i]);
      }
    }
    
    return result;
}