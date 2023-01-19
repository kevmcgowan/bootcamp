const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        name: 'file_name',
        message: 'what would yo like the file name to be?',
    },
    {
        name: 'content',
        message: 'what content would you like to add?',
    }
]).then(data => {
    fs.writeFile(data.file_name + '.txt', data.content, (err) => {
        if (err) return console.log(err);
    });
    console.log(`you have created the ${data.file_name} file`);
    console.log(`The contents of the file are:\n${data.conetnt}`);
});