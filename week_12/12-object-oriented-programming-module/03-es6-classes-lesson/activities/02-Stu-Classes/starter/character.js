class Character {
  constructor(name, strength, hitPoints) {
    if (!name) {
      throw new Error('Provide a name for your character');
    }
    if (strength === undefined) {
      throw new Error('Please provide a strength value');
    }
    if (!hitPoints) {
      throw new Error('You didn`t add a hitPoint value');
    }

    this.name = name;
    this.strength = Math.floor(Math.random() * 30);
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log('------------');
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive() {
    // if (this.hitPoints <= 0) {
    //   return false;
    // } else {
    //   return true;
    // }
    return this.hitPoints > 0;
  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    // Then, change the opponent's hitPoints to reflect this
    // * Minus opponents hitpoints from the strength of that current Character
    console.log(
      `${this.name} has attacked ${opponent.name} with ${this.strength} attack points.`
    );
    opponent.hitPoints = opponent.hitPoints - this.strength;
  }
}

// Create two unique characters using the "character" class
const DJ = new Character('DJ', 20, 100);
const Joe = new Character('Joe', 15, 100);
let thisTurn = true;
// Create an interval that alternates attacks every 2000 milliseconds
const turns = setInterval(() => {
  if (DJ.isAlive() === false) {
    clearInterval(turns);
    console.log('Game Over ' + Joe.name + ' has won');
  } else if (!Joe.isAlive()) {
    clearInterval(turns);
    console.log('Game Over ' + DJ.name + ' has won');
  } else if (thisTurn) {
    DJ.attack(Joe);
    Joe.printStats();
    thisTurn = false;
  } else {
    Joe.attack(DJ);
    DJ.printStats();
    thisTurn = true;
  }
}, 2000);