const md = `
Project Name = ${projectName}
Table of Contents
[Decription](#section)  
`;

// const data = {
//     name: 'JD',
//     age: 43,
//     info: {
//         lat: '2134234.2342',
//         long: '23424 23424',
//         location: 'Atlanta',
//         main: {
//             temp: '55',
//             wind: '4mph',
//         }
//     }
// };

// const info = {
//     color: 'red',
//     type: 'alert'
// };

// const colors = ['orange', 'blue', 'green', 'red'];

// for (let color of colors){
//     console.log(color)
// }

// for (let prop in info) {
//     console.log(info[prop]);
// }




// Spread
// const info = {
//     color: 'red',
//     type: 'alert'
// };

// const details = {
//     ...info,
//     building: 'B'
// }


// console.log(details)

// const colors = ['orange', 'blue', 'green', 'red'];

// const colorsSpread = ['yellow',...colors, 'cyan'];

// function concatIt(orig, newitems){
//     return [...orig, ...newitems];
// }

// const newArr = concatIt(colors, ['black', 'brown', 'pink'])

// console.log(newArr)
// // spread operator for arrays, gives you all the items. if you wrap it in [] you add items to begining or end of your array
// console.log(colorsSpread)




// const fruitData = ['orange', function(){
//     console.log('orange');
// }]
// const [fruit, fruitFunc] = fruitData
// const [sjhdas, another] = fruitData;

// console.log(fruit)

// fruitFunc();





// const fruits = ['orange', function(){
//     console.log('array function');
// }, 'kiwi'];

// func();



// const fruits = ['orange', 'apple', 'kiwi'];

// // const apple = fruits[0];
// const [o, a] = fruits;
// console.log(a)





// destructuring objects, must match the property name.Can set the variable using':'. Can comma separate values.
// for each nested object you need {}
// const {age:personAged, name:personName, info:{location}} = data;


// function getWeather ({info:{location}}) {
// console.log(location);
// }
// getWeather(data)

// console.log(personAged, personName);