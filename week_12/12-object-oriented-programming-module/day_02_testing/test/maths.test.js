const maths = require('../lib/maths');
const Person = require('../lib/Person');


// test('should return 10', () => {
//     const sum = 5 + 7;
//     expect(sum).toBe(10);
// });

describe('Maths', () => {
    it('Should return 10', ()=> {
        const sum = maths.sum(5, 5);
        expect(sum).toBe(10);
    });

    it('Should return 4', ()=> {
        const diff = maths.diff(8, 4);
        expect(diff).toBe(4);
    });
})
describe('Person', () => {
    it('Should be an object with name equal to JD and age equal to 44', () => {
        const jd = new Person('JD', 43);

        jd.haveBirthday();

        expect(jd).toMatchObject({
            name: 'JD',
            age: 44
        });
    })
})