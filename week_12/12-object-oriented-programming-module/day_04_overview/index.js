const Student = require('./Student');
const SSM = require('./SSM');

const stan = new Student('UK10', '24/02/2023', 'Stan');
const enrique = new SSM('UK10', '24/02/2023', 'Enrique');


stan.printClassCode();
enrique.printClassCode();


stan.printName();
enrique.printName();