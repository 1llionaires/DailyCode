// A magician in the subway showed you a trick, he put an ice brick in a bottle to impress you. The brick's length and width are equal, forming a square; its height may be different. Just for fun and also to impress the magician and people around, you decided to calculate the brick's volume. Write a function iceBrickVolume that will accept these parameters:

// radius - bottle's radius (always > 0);
// bottleLength - total bottle length (always > 0);
// rimLength - length from bottle top to brick (always < bottleLength);
// And return volume of ice brick that magician managed to put into a bottle.

//P: radius, bottleLength, rimLength
//R: return the maximum volume of the ice cube that was inserted into the bottle
//E: given (1,10,2), results 16
//   given (5,30,7), results 1150
//   given (2,10,5), results 40
//PC: create a function that takes in the parameters of the bottle and calculate the volume of the ice cuboid
function iceBrickVolume(radius, bottleLength, rimLength) {
    return ((radius*radius+radius*radius)*(bottleLength-rimLength));
}

//OR

const iceBrickVolume = (r, x, y) => 2 * r * r * (x - y);