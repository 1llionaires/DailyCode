// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//P: string url
//R: return the url with everything removed from # anchor
//E: given "www.codewars.com#about", result "www.codewars.com"
//   given "www.codewars.com?page=1", result "www.codewars.com?page=1"
//   given 'www.codewars.com/katas/?page=1#about', result 'www.codewars.com/katas/?page=1'
//PC: create a function that splits the url if there is a # present in the string and returns the first element

function removeUrlAnchor(url){
    return url.split('#')[0]
}