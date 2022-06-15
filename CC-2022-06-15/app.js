// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

//P: array of numbers and letters
//R: return array with only numbers
//E: given [1,2,'a','b'], result [1,2]
//   given [1,'a','b',0,15], result [1,0,15]
//   given [1,2,'aasf','1','123',123], result [1,2,123]
//PC: create a function that filters by type (num)
function filter_list(l) {
    return l.filter(element => typeof(element) === 'number')
}