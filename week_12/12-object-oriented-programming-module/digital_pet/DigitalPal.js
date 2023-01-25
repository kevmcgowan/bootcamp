// DigitalPal.prototype.printName = function() {
//     console.log(`Hi, I am ${this.name}`);
// }
function DigitalPal(pet_name) {
    this.name = pet_name;
    this.hungry = false;
    this.sleepy = false;
    this.bored = false;
    this.age = 0;
    this.outside = true;
    this.houseCondition = 100;

  
    this.printName = () => {
        console.log(`Hi, I am ${this.name}`);
    }
};

DigitalPal.prototype.feed = function () {
    if(this.hungry){
        console.log('That was yummy!');
        this.hungry = false;
        this.sleepy = true;
    } else  {
        console.log("No thanks I'm full");
    }
};

DigitalPal.prototype.sleep = function(){
    if(this.sleepy){
        console.log('Zzzzzzzzz');
        this.sleepy = false;
        this.bored = true;
        this.increaseAge()
    } else {
        console.log("No way! I'm not tired");
    }
};

DigitalPal.prototype.play = function() {
    if(this.bored){
        console.log("Yay! Let's play!!");
        this.bored = false;
        this.hungry = true;
    } else {
        console.log('Not right now. Later?');
    }
};

DigitalPal.prototype.increaseAge = function() {
    this.age = this.age++ 
        console.log(`Happy Birthday to me! I am ${this.age} old!`);
};

DigitalPal.prototype.bark = function () {
    console.log('Woof Woof');
};

DigitalPal.prototype.goOutside = function () {
    if(this.outside) {
        console.log("Yay! I love the outdoors!");
        this.outside = true;
        this.bark();
    } else {
        console.log("We're already outside though...");
    }
};

DigitalPal.prototype.goInside = function() {
    if(this.outside) {
        console.log("Do we have to? Fine...");
        this.outside = false;
    } else {
        console.log("I'm already inside...");
    }
};

DigitalPal.prototype.meow = function() {
    console.log('Meow Meow');
};

DigitalPal.prototype.destroyFurniture = function() {
    // this.houseCondition = this.houseCondition - 10;
    if(this.houseCondition > 0){
    this.houseCondition -= 10;
    console.log("MUAHAHAHAHA! TAKE THAT FURNITURE!");
    this.bored = false;
    this.sleepy = true;
    }
};




const teddy = new DigitalPal('Teddy');
teddy.sleep();


