// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

//P: length, width, height
//R: volume
//E: given 1,2,3, result 6
//   given 2,4,6, result 48
//   given 1,3,5, result 15
//PC: create a function to find the volume of cuboid
class Kata {
    static getVolumeOfCuboid(length, width, height) {
      return length * width * height;
    }
}