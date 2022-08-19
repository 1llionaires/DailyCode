// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the new String Template feature, Help Timmy with his string template so it works as he expects!

//P: function
//R: fix the bugs in Timmy's code to properly display the string that is intended
//E: given ('Cheese','Milk','Chocolate'), results 'I like Cheese, Milk, Chocolate!'
//   given ('Cheese','Milk'), results I like Cheese, Milk!'
//   given ('Chocolate'), results 'I like Chocolate!'
//PC: fix the bugs and typos in the function to make sure the function is properly working
//Before
function buildString(...template){
    return `I like #{template.join(',')}!`;
}

//After
function buildString(...template){
    return `I like ${template.join(', ')}!`;
}