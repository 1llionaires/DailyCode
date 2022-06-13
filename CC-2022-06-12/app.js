// Create a function that returns the name of the winner in a fight between two fighters.

// Each fighter takes turns attacking the other and whoever kills the other first is victorious. Death is defined as having health <= 0.

// Each fighter will be a Fighter object/instance. See the Fighter class below in your chosen language.

// Both health and damagePerAttack (damage_per_attack for python) will be integers larger than 0. You can mutate the Fighter objects.

//P: two objects (fighters)
//R: create a function that returns the winner of the fight
//E:   declare_winner(Fighter("Lew", 10, 2), Fighter("Harry", 5, 4), "Lew") => "Lew" 
//     Lew attacks Harry; Harry now has 3 health.
//     Harry attacks Lew; Lew now has 6 health.
//     Lew attacks Harry; Harry now has 1 health.
//     Harry attacks Lew; Lew now has 2 health.
//     Lew attacks Harry: Harry now has -1 health and is dead. Lew wins.
//PC: create a function that takes in two objects and determines who will win depending on the properties of the objects and use a boolean to compare

function declareWinner(fighter1, fighter2, firstAttacker) {
    const f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack)
    const f2 = Math.ceil(fighter2.health / fighter1.damagePerAttack)
    return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
}