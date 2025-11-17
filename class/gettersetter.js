class BankAccount {
  #balance = 0;

  set balance(amount) {
    if (amount <= 0) {
      console.log("Invalid amount");
    } else {
      this.#balance = amount;
      console.log(`deposited amount ${amount}`)
    }
  }
  // deposit(amount){
  //     this.#balance = amount;
  // }

  withdraw(amount) {
    if (amount < this.#balance) {
      this.#balance -= amount;
    } else {
      console.log("Insufficient balance");
    }
  }

  get balance() {
    //getter method
    return this.#balance;
  }
}

const account = new BankAccount();
// account.deposit(10000);
account.balance = 10000;
account.withdraw(500);
console.log(account.balance);
