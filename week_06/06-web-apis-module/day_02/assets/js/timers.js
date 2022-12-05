
var time = 60;


var countdown = setInterval(function() {
    document.body.innerText = time;
    time--; 
    if (time < 0){
        clearInterval(countdown);
    };
}, 1000 );






// function doSomething(func, text) {
//     func(text);
// }

// doSomething(function (str) {
//     console.log(str);
// }, 'some text');