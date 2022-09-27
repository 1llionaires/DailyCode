// The wide-mouth frog is particularly interested in the eating habits of other creatures.

// He just can't stop asking the creatures he encounters what they like to eat. But, then he meets the alligator who just LOVES to eat wide-mouthed frogs!

// When he meets the alligator, it then makes a tiny mouth.

// Your goal in this kata is to create complete the mouth_size method this method takes one argument animal which corresponds to the animal encountered by the frog. If this one is an alligator (case-insensitive) return small otherwise return wide

//P: animals in strings
//R: return if the animal is alligator(case in-sensitive) then return small else return wide
//E: given 'toucan', results 'wide'
//   given 'alligator', results 'small'
//   given 'dog', results 'wide'
//PC: create a function that checks if the animal === 'alligator' and return appropriate string
function mouthSize(animal) {
    return animal.toLowerCase() == 'alligator' ? 'small' : 'wide';
}