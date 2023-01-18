// const prop = process.argv[2];
// const value = process.argv[3];

// const obj = {};

// obj[prop] = value;

// console.log(obj);

// const fetch = require('node-fetch');


const command = process.argv[2];
const url = process.argv[3];

if(command === 'fetch') {
    axios.get(url)
    .then(res => {
        console.log(res.data);
    });
}

console.log(`You entered the following ${command} command`);
