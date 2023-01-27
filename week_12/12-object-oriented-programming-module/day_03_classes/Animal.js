// function Animal() {
//    this.alive = true;
//     this.sound = sound;
// };


// Animal.prototype.printSound = function () {
//     console.log(this.sound)
// };

// class Animal {
//     printSound() {
//         console.log('Hey')
//     }

//     another() {

//     }
// }


// class Animal {
//     constructor(sound) {
//         this.alive = true;
//         this.sound = sound
//     }

//     printSound() {
//         console.log(this.sound);
//     }
// }


// const bear = new Animal('grrr');
// const cat = new Animal('meow');

// bear.printSound();

// console.log(bear, cat)



class User {
    constructor(firstName, lastName, password) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.password = password;
    }

    printDetails() {
        console.log(`
        First Name: ${this.firstName}
        Last Name: ${this.lastName}
        `)
    }
    
    printDetails() {
        console.log()
    }
}