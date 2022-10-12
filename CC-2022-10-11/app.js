// Your job is simple, if x squared is more than 1000, return It's hotter than the sun!!, else, return Help yourself to a honeycomb Yorkie for the glovebox.

//P: integer x
//R: return a conditional if x^2>1000 return a string else return a different string
//E: given (50), result 'It\'s hotter than the sun!!'
//   given (4), result 'Help yourself to a honeycomb Yorkie for the glovebox.'
//   given (25), result 'Help yourself to a honeycomb Yorkie for the glovebox.'
//P: write a function that takes in parameter integer x and square it and compare it to 1000
//   if x^2 is>1000 return 'It\'s hotter than the sun!!' else return 'Help yourself to a honeycomb Yorkie for the glovebox.'
function apple(x){
    return x**2>1000?'It\'s hotter than the sun!!':'Help yourself to a honeycomb Yorkie for the glovebox.'
}