// var add = (a, b) => a + b;
// var sum = add(5, 10);

// var printName = name => console.log(bob);

var data = {
    name: 'kev',
    age: 51,
    hobbies: ['eating', 'drinking'],
    printName: function() {
        var capitalize = () => this.name[0].toUpperCase() + this.name.slice(1);

        this.name = capitalize();

        console.log(this.hobbies);
    }
};
data.printName();

