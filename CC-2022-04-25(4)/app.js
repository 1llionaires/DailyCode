// Simple, remove the spaces from the string, then return the resultant string.

//P: string
//R: remove spaces in string
//E: given '8 j 8   mBliB8g  imjB8B8  jl  B', result '8j8mBliB8gimjB8B8jlB'
//   given '8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd', result '88Bifk8hB8BB8BBBB888chl8BhBfd'
//   given '8aaaaa dddd r     ', result '8aaaaaddddr'
//PC: create a function to remove spaces in string
function noSpace(x){
    return x.split(' ').join('')
}

//OR

function noSpace(x){
    return x.replace(/\s/g, '')
  }