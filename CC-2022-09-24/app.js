// Happy Holidays fellow Code Warriors!
// Santa's senior gift organizer Elf developed a way to represent up to 26 gifts by assigning a unique alphabetical character to each gift. After each gift was assigned a character, the gift organizer Elf then joined the characters to form the gift ordering code.

// Santa asked his organizer to order the characters in alphabetical order, but the Elf fell asleep from consuming too much hot chocolate and candy canes! Can you help him out?

// Sort the Gift Code
// Write a function called sortGiftCode/sort_gift_code/SortGiftCode that accepts a string containing up to 26 unique alphabetical characters, and returns a string containing the same characters in alphabetical order.

//P: string
//R: return the string with the letters organized in alphabetical order
//E: given "abcdef", results "abcdef"
//   given "pqksuvy", results "kpqsuvy"
//   given "zyxwvutsrqponmlkjihgfedcba" , results "abcdefghijklmnopqrstuvwxyz"
//PC: create a function that splits the string into array and sorts the elements in alphabetical order and join the array back into a string
function sortGiftCode(code){
    return code.split('').sort().join('');
}