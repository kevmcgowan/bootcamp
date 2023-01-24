const fs = require('fs');

// fs.appendFile('./tasks.txt', '\n pear', (error) => {
//     if (error) {
//         console.log(error);
//     } 
// });





fs.writeFile('./tasks.txt', 'banana', (error) => {
    if (error) {
        console.log(error);
    } else {
        
        console.log(error);
    }
});




// fs.readFile('./tasks.txt', 'utf-8', (error, data) => {
//     if (error) {
//         console.log(error);
//     } else {
//         const tasks = (data.split('\n'));
//         console.log(tasks[1]);
//     }
// });