// For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//P: array of strings
//R: if array has no 'good' return 'Fail!' or 1-2 'good' = 'publish!' 3 or more = 'I smell a series!'
//E: given ['bad','bad','bad'], result 'Fail!'
//   given ['good','bad','bad','bad'], result 'Publish!'
//   given ['good','bad','bad','bad','good','bad','bad','good'], result 'I smell a series!'
//PC: create a function that filters array for 'good' and return an answer according to number of 'good' in the array
function well(x){
    const count = x.filter(x => x == 'good').length;
    return count < 1 ? 'Fail!' : 
           count < 3 ? 'Publish!' : 'I smell a series!';
}