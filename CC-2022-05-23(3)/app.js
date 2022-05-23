// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

//P: flower1 and flower2
//R: if flower1 is odd and flower2 is even or vice versa return true, else return false
//E: given [1,4], return true
//   given [3,5], return false
//   given [6,7], return true
//PC: create a function to check if number of petals is odd or even and return boolean
function lovefunc(flower1, flower2){
    return (flower1 % 2 === 1 && flower2 % 2 === 0) ? true : (flower1 % 2 === 0 && flower2 % 2 === 1) ? true : false;
}

//OR 

function lovefunc(flower1, flower2){
    return flower1 % 2 !== flower2 % 2;
}