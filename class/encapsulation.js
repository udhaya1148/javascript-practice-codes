class BankAccount {
  #balance = 0;

  deposit(amount) {
    this.#balance = amount;
  }

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
account.deposit(10000);
account.withdraw(500);
console.log("Current balance =",account.balance);
