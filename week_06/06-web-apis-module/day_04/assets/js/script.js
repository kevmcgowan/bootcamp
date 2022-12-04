var questions = [
    {
        title: 'what is the acronym for the Document Object Model?',
        choices: ['JS', 'OBJ', 'DOM', 'ARR'],
        answer: 'DOM'
    },
    {
        title: 'What type of for loop is used for iterating over an object?',
        choices: ['in', 'of', 'at', 'each'],
        answer: 'in'
    }
];

var currentQuestionIndex = 0;
var questionWrap = document.querySelector('.questionWrap');

// questionWrap.classList.add('hide');
// questionWrap.classList.remove('hide');


questionWrap.insertAdjacentHTML =
    <div class ='questionWrap'>
        <h3>${questions[currentQuestionIndex].title}</h3>
        <ul></ul>
    </div>


// we to display the question
// display a list of choices













// localStorage.setItem('color', 'lightseacoral');
// localStorage.setItem('food', 'apple');


// var color = localStorage.getItem('color');

// console.log(color)

var data = {
    name: 'KM',
    age: 51
};

// var userData = localStorage.setItem('user_data', JSON.stringify(data));

var userData = JSON.parse(localStorage.getItem('color'));

console.log(userDate.name);






















// var questionWrap = document.querySelector('.question-wrap');
// var header = document.querySelector('#header-text');

// header.setAttribute('data-bozo', 'cheesy');

// header.dataset.something = 'something';

// console.log(header.dataset.bozo);
// console.log(header.getAttribute('data-bozo'));


// function checkAnswer(event) {
//     var el = event.target;

//     if (el.TagName === 'LI') {
//         var userAnswer = el.innerText;
//         var isCorrect = el.dataset;
//         var is

//         if (isCORRECT === 'true') {
//             alert('You got it right!');
//         }
//     }
// }

// questionWrap.addEventListener('click', checkAnswer);
