const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the project name?',

    },
    {
        type: 'input',
        name: 'descritption',
        message: 'What is the project description'
    },
];

// function to write README file
function writeToFile(fileName, data) {
    const markdownData = generateMarkdown(data);
    console.log(markdownData)
}

// function to initialize program
function init() {
    inquirer.prompt(questions).then(data => {
        console.log(data)
        writeToFile('GeneratedREADME.md', data);
    });
}

// function call to initialize program
init();
