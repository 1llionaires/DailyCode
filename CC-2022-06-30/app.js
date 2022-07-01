// Write a function that converts any sentence into a V A P O R W A V E sentence. a V A P O R W A V E sentence converts all the letters into uppercase, and adds 2 spaces between each letter (or special character) to create this V A P O R W A V E effect.

//P: string
//R: return string in all caps and with two spaces between each character while ignoring spaces
//E: given "vaporwave", results V  A  P  O  R  W  A  V  E
//   given "Lets go to the movies", results  "L  E  T  S  G  O  T  O  T  H  E  M  O  V  I  E  S"
//   given "Why isn't my code working?", results "W  H  Y  I  S  N  '  T  M  Y  C  O  D  E  W  O  R  K  I  N  G  ?"
//PC: create a function that a string and splits it at the space and joins to elimate the space
//    split the string once again at each character and join with two spaces in between each character
function vaporcode(string) {
    return string.toUpperCase().split(" ").join("").split("").join("  ");
}