// Add two logs with base X, with the value of A and B. Example log A + log B where the base is X.

//P: a, b, x
//R: return the sum of log A base x and log B base x
//E: given (10, 2, 3), result 0.7781512503836435
//   given (5, 2, 3), result 1.1132827525593785
//   given (1000, 2, 3), result 0.25938375012788123
//PC: create a function that can sum log A base x and log B base x
function logs(x , a, b){
    let logA = Math.log(a)/Math.log(x)
    let logB = Math.log(b)/Math.log(x)
    return logA + logB
}

//OR 

function logs(x , a, b){
    return (Math.log(a*b) / Math.log(x));
}