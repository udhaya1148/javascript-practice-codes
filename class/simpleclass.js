class car{
    constructor(brand, model){
        this.brand = brand;
        this.model = model;
    }

    start(){
        console.log(`${this.brand} ${this.model} is Starting..`)
    }
}

const car1 = new car("BMW", "X7");
car1.start()
