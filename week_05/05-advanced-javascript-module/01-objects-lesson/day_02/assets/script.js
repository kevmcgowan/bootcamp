
var dog = {
    type: 'dog',
    breed: 'sausage',
    sound: 'woof!',
    legAmount: 4
  };
  
  var cat = {
    type: 'cat',
    breed: 'british shorthair',
    sound: 'meow!',
    legAmount: 4
  };
  
  var tarantula = {
    type: 'spider',
    breed: 'Mexican Red-Knee',
    sound: null,
    legAmount: 8
  };
  
  var petsDB = [dog, cat, tarantula];
  
  for (var i = 0; i < petsDB.length; i++) {
    var pet = petsDB[i];
  
    console.log(`
      type: ${pet.type}
      breed: ${pet.breed}
      sound: ${pet.sound}
      leg amount: ${pet.legAmount}
    `);
  }
  
  for (var i in petsDB) {
    var pet = petsDB[i];
  
    console.log(`
      type: ${pet.type}
      breed: ${pet.breed}
      sound: ${pet.sound}
      leg amount: ${pet.legAmount}
    `);
  }
  
  for (var pet of petsDB) {
  
    console.log(`
      type: ${pet.type}
      breed: ${pet.breed}
      sound: ${pet.sound}
      leg amount: ${pet.legAmount}
    `);
  }


  for (var prop in tarantula) {
    console.log()
  }
    // var el =document.createElement('p');
    // el.innerText =
  

// // if you only have one object you don't need to wrap it in "{}"
// if (pet.type === 'spider') break;
