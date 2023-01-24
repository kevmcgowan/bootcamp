function MiniBank(balance) {
  this.balance = balance;
  this.statement = [`Initial Balance ${balance}`];
  
  this.getBalance = () => {
    return this.balance;
  };
  this.setBalance = (value)=> {
    this.balance = value;
  };
  this.printBalance = () => {
    console.log(`Balance: ${this.getBalance()}`);
  };

  this.updateStatement = (num) => {
    this.statement.push(num);
  };
  this.getStatement = () => {
    return this.statement;
  };
  this.printStatement = () => {
    this.statement.forEach((val) => {
      console.log(val);
    })
  };
  this.deposit = (value) => {
    this.updateStatement(value);
    const currentBalance = this.getBalance();
    this.setBalance(currentBalance + value);
  };
  this.withdraw = (value) => {
    this.updateStatement(-Math.abs(value));
    const currentBalance = this.getBalance();
    this.setBalance(currentBalance - value);
  }
}


const santander = new MiniBank(10000);

santander.printBalance()

santander.deposit(1000);
santander.withdraw(5500);

santander.printStatement();
santander.printBalance();






// MiniBank.prototype.greeting = function () {
//   console.log('Welcome to my bank')
// }

const myBank = new MiniBank

myBank.greeting