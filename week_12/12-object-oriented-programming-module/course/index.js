const Student = require('./Student');
const SSM = require('./SSM');
const inquirer = require('inquired');
const path = require('path')

function generateSSM() {
    return inquirer.prompt({
        name: 'name',
        message: 'Please enter the SSS\'s name.';
    }) .then(data =>{
        console.log(data);
    })
}

function showMainMenu() {
    inquirer.prompt({
        type: 'list',
        name: 'option',
        message: 'Please choose an option'
    })
}

// function init() {
//     console.log('===Welcome to the Course Manager app===');


//     generateSSM();
// }

// init();

function prompt(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('All good');
        }, 3000)
    });
}

const data = prompt();
console.log(data);