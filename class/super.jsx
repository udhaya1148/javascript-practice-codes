
class Account{
    constructor(user, balance){
        this.user = user;
        this.balance = balance;
    }

    showBalance(){
        console.log(`${this.user} balance is ${this.balance}`)
    }
}

class SavingsAccount extends Account{
    constructor(user, balance, rate){
        super(user,balance) //call constructor from parent
        this.rate = rate
    }

    showBalance(){
        super.showBalance() //call parent method
        console.log(`interest rate is ${this.rate}`)
    }

    // displayinterest(){
    //     console.log(`${this.user} balance is${this.balance} interest rate is ${this.rate}`)
    // }
}

// const user1 = new Account("Ram", 10000)
const user1 = new SavingsAccount("Ram", 10000, 4)
// user1.showBalance()
// user1.displayinterest()
user1.showBalance()

