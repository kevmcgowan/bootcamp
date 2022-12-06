// var btn = document.getElementById('btn');
// var isDark = false;

// btn.addEventListener('click', function() {

//     if (isDark) {
//     document.body.classList = 'light';
//     btn.innerText = 'Dark Theme'
//     } else {
//     // document.body.style.background = '#777';
//     // document.body.style.color = 'white';
//     document.body.classList = 'dark';
//     btn.innerText = 'Light Theme';
//     }

//     isDark = !isDark;
// });




// function doSomething(func) {
//     func(); 
// }

// function namedFuction() {
//     console.log('callback called');

// }

// doSomething(namedFuction);


var link = document.querySelector('#link');

link.addEventListener('click', function(event) {
    event.preventDefault();
    
     console.log(event)
})