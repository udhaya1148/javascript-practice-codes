// class Animal{
//     constructor(name){
//         this.name =name;
//     }

//     eat(){
//         console.log(`${this.name} is eating.`)
//     }
// }

// class Dog extends Animal{
//     dog(){
//         console.log(`${this.name} is barking`)
//     }
// }

// const dog1 = new Dog("Tommy")
// dog1.dog()
// dog1.eat()  

class Account{
    constructor(user, balance){
        this.user = user;
        this.balance = balance;
    }

    deposit(amount){
        this.balance+=amount
        console.log(`${this.user} ,deposited amount ${amount}, New balance is ${this.balance}`)
    }
}

class SavingAccount extends Account{
    addInterest(rate){
        const interest = (this.balance * rate)/100
        this.balance+=interest
        console.log(`${this.user} earned interest is ${interest}`);
    }
}

const user1 = new SavingAccount("Ram", 10000);
user1.deposit(2000);
user1.addInterest(5);

