// class car{
//     constructor(name){
//         this.name = name;
//     }

//     brand(){
//         console.log(this.name)
//     }
// }

// const brand1 = new car("BMW");
// const brand2 = new car("Audi");

// brand1.brand();
// brand2.brand();

class Button {
  constructor(label) {
    this.label = label;
  }

  click() {
    console.log(`Button ${this.label} clicked`);
  }
}

const b = new Button("Save");
setTimeout(b.click(), 1000);
// setTimeout(()=> b.click(), 1000); // ❌ undefined
