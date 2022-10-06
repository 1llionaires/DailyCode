// You get any card as an argument. Your task is to return the suit of this card (in lowercase).

//P: string with card number and suit
//R: return a new string with the suit of the card in words
//E: given ('3♣'), result 'clubs'
//   given ('3♦'), result 'diamonds'
//   given ('3♥'), result 'hearts'
//PC: greate a function that splits the string into substr and get last character
//    then use switch instead of if/else to switch the suit with the worded form of the suit
function defineSuit(card){
    var suit = card.substr(-1);
    switch(suit){
            case "♣": return "clubs";
            case "♦": return "diamonds";
            case "♥": return "hearts";
            default: return "spades";
    }
}