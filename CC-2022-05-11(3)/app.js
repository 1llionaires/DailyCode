// A hero is on his way to the castle to complete his mission. However, he's been told that the castle is surrounded with a couple of powerful dragons! each dragon takes 2 bullets to be defeated, our hero has no idea how many bullets he should carry.. Assuming he's gonna grab a specific given number of bullets and move forward to fight another specific given number of dragons, will he survive?

// Return True if yes, False otherwise :)

//P: bullets and dragons
//R: determine if the hero has enough bullets to kill all of the dragons
//E: given (10, 5), result true
//   given (7, 4), result false
//   given (4, 5), result false
//PC: create a functional to check if there the hero has 2 bullets for every dragon
function hero(bullets, dragons){
    return 2*dragons<=bullets
}