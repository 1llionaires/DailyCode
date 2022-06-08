// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

//P: array of integers
//R: return the one odd or even number in the array
//E: given [0, 1, 2]. result 1
//   given [1, 2, 3], result 2
//   given [2,6,8,10,3], result 3
//PC: create a function that loops through array to check for odd and even and push each element to correct new arrays. if either array length = 1 return the number in that array
function findOutlier(integers){
    let odd = []; 
    let even = []; 
    
    for(let i = 0; i < integers.length; i++){
      if(integers[i]%2===0){
        even.push(integers[i]); 
      }else{
        odd.push(integers[i]); 
      }
    }
    
    return odd.length === 1 ? odd[0]:even[0]; 
}

//OR  

function findOutlier(int){
    var even = int.filter(a=>a%2==0);
    var odd = int.filter(a=>a%2!==0);
    return even.length==1? even[0] : odd[0];
}