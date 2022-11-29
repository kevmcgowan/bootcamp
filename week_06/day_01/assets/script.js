// var users1 = [
//     {
//       name: 'JD',
//       age: 42
//     },
//     {
//       name: 'Jane',
//       age: 35
//     },
//     {
//       name: 'Sarah',
//       age: 38
//     }
//   ];
  
//   var users2 = [
//     {
//       eyeColor: 'blue',
//       height: 6.2
//     },
//     {
//       eyeColor: 'green',
//       height: 5.8
//     }
//   ];
  
  
//   // Create  a function that prints each property and value from any of our data arrays
//   function printer(arr) {
//     for (var obj of arr) {
//       for (var prop in obj) {
//         console.log(`
//           ${prop}: ${obj[prop]}
//         `);
//       }
//     }
//   }
  
//   printer(users1);

var h1 = document.querySelector('.main-header')

var h1 = document.body.children[0];
var h1 = document.getElementById('main-header');


h1.innerText = 'Something Else';

h1.style.backgroundColor = 'red';