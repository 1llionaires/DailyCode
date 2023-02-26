// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

// Example:

// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let result = []
    let arr = x.split('')
    for (let i=0;i<arr.length;i++){
      if (arr[i]==='a'){
        result.push('b')
      }else if(arr[i]==='b'){
        result.push('a')
      }else{
        result.push('c')
      }
    }return result.join('')
  }