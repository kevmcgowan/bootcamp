
const fs = require('fs');

function createFile(data){
f   s.writeFile(data.file_name + '.txt', data.content, (err) => {
    if (err) return console.log(err);
});
console.log(`you have created the ${data.file_name} file`);
console.log(`The contents of the file are:\n${data.conetnt}`);

}