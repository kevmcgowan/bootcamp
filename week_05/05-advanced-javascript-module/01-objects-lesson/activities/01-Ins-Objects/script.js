// Objects are a collection of properties
var planet = {
  // Properties are made up of key-value pairs
  name: "Earth",
  age: "4.543 billion years",
  moons: 1,
  isPopulated: true,
  population: "7.594 billion"
};

// To access a property's value that is a string, number or booleean, use the object's name and the associated key	
// Uses dot notation and logs "Earth"	
console.log(planet.name);
	
// Uses bracket notation and logs "Earth"
console.log(planet["name"]);


var hobbies = ['pickleball', 'fishing', 'cooking']
// add an item to the array
// hobbies.push(cricket)
console.log(hobbies)
//add item to middle of the array

var startIndex = (hobbies.length / 2);
hobbies.splice(startIndex, 0, 'one more');
console.log(hobbies)


var data = {
  name: 'JD',
  age: 42,
  isMarried: true,
  hobbies: hobbies
};
// console.log(data.name)
// to access nested arrays
// console.log(data.hobbies[1])


console.log(hobbies)