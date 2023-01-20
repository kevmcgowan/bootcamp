const inquirer = require('inquirer');
const creatFile = require('./createFile.js');

function promptUser(){
inquirer.prompt([
    {
        name: 'file_name',
        message: 'what would yo like the file name to be?',
    },
    {
        name: 'content',
        message: 'what content would you like to add?',
    }
]).then(createFile);

}

module.exports = promptUser;











// const str = 'some string';
// const info = {
//     myStr: 'str',
//     name: 'KM'
// };

