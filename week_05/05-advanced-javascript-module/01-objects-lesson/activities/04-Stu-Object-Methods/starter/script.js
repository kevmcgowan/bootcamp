//WRITE YOUR CODE BELOW
var menu = {   
    coffee: {
        price: 2.50,
    },
    tea: {
        price: 1.50,
    },
    softDrink: {
        price: 1.00,
    },
    water: {
        price: 10,
    }
}

var totalPrice = 0;

for (var prop in menu) {
    console.log(prop);

    console.log(menu[prop].price);
    totalPrice += menu[prop].price;
}

console.log('Total Price', totalPrice)

var menu = {   
    coffee: {
        price: 2.50,
    },
    tea: {
        price: 1.50,
    },
    softDrink: {
        price: 1.00,
    },
    water: {
        price: 10,
    }
}
for (var prop in menu) {
    console.log(`${prop}`)
}