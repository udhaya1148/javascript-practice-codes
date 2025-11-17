class Animal {
  speak() {
    console.log("Some Animal Sound");
  }
}

class Dog {
  speak() {
    console.log("Dog bark");
  }
}

class Cat {
  speak() {
    console.log("Cat meows");
  }
}

const animals = [new Animal(), new Dog(), new Cat()];
animals.forEach(a =>a.speak());
