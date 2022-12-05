// console.log(document.body.children[0]);



// console.log(document.body.children[1].children[0].children[1])


// var h1 = document.body.children[0];
// var h1 = document.getElementById('main-header');
// takes a CSS qyery as an argument. CSS selector string
var h1 = document.querySelector('.main-header');
var li = document.querySelector('.main ul li');
var listItems = document.querySelectorAll('.main ul li');
// console.log(h1);

h1.innerText = 'something else';

h1.style.backgroundColor = 'red';

li.style.backgroundColor = 'orange';

var count = 0
for (const l of listItems) {
    l.innerText = count

    count++;
}

console.log(listItems);

// console.log(h1.style)
// console.log(h1);

// var data = {
//     name: 'JD'
// };

// data.name = 'Bob';


















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
  
  
// //   // Create  a function that prints each property and value from any of our data arrays

//              //(parameters, they come out in the order entered)
// function printer(arr) {
//     //each item in the array is stored to this var as an object, loops over interable values.Array & Strings
//     for (var obj of arr) {
//         // for IN used to loop over object
//       for (var prop in obj) {
//         //you can use bracket notation[] if you do not know the name of the object 

//         //to dynamically get the prop name. Template littoral string
//         console.log(`
//           ${prop}: ${obj[prop]}
//         `)
//         }
//       }
//     }

//         //argument
// printer(users1, users2);



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

// var h1 = document.querySelector('.main-header')

// var h1 = document.body.children[0];
// var h1 = document.getElementById('main-header');


// h1.innerText = 'Something Else';

// h1.style.backgroundColor = 'red';

