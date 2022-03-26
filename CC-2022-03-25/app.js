// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

//P: array of booleans
//R: return number of trues in the array
//E: given [true, true, true, false],  result 3
//   given [true, true, true, false, true, true, true, false], result 6
//   given [true, true, true, false, true, true, true, false, true, true], result 8
//PC: create a function that loops through array and counts how many trues are contained inside
function countSheeps(arrayOfSheep) {
    let count = 0;
    for(let i = 0; i < arrayOfSheep.length; i++){
      if(arrayOfSheep[i] === true){
        count += 1;
      }    
    }
    return count;
}

//OR

function countSheeps(arrayOfSheeps) {
    return arrayOfSheeps.filter(Boolean).length;
}