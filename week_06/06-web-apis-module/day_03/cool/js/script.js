var btn = document.getElementById('btn');
var random = document.querySelector('.random-div');
var output = document.querySelector('#output');

btn.addEventListener('click', function(event){
    event.stopPropagation();
    console.log('btn clicked');
});


var ul = document.querySelector('ul');


ul.addEventListener('click', function (event) {
    output.innerText = event.target.innerText;
});




// random.addEventListener('click', function() {
//     console.log('random clicked as well');
// })
// document.body.addEventListener('click', function() {
//     console.log('body clicked as well');
// })