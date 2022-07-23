// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//P: string
//R: return string without the vowels
//E: given "This website is for losers LOL!", results "Ths wbst s fr lsrs LL!"
//   given "No offense but,\nYour writing is among the worst I've ever read", results "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd"
//   given "What are you, a communist?", results "Wht r y,  cmmnst?"
//PC: create a function that takes in a string
//    create a variable that contains all the vowels
//    split the string filter it to remove the vowels and join
function disemvowel(str) {
    let vowels = ['a','e','i','o','u']
    return str.split('').filter(e=>vowels.indexOf(e.toLowerCase())==-1).join('')
}