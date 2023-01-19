const fs = require('fs');

fs.readFile('./file.txt', 'utf8', (error, data) => {
    if (error) {
                console.log(error);
    } else {
        const file = (data.split('\n'));
        console.log(file[1]);
    }
});


