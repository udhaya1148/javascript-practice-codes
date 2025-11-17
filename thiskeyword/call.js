

const person = {
//   name: "Udhay",
  greet: function(greeting, punctuation) {
    console.log(`${greeting}, ${this.name}${punctuation}`);
  }
};

const anotherPerson = { name: "kumar" };
let fnnew = person.greet.bind(anotherPerson,"Hr","!!"); //bind call it later

person.greet("Hi", "!"); 
person.greet.call(anotherPerson ,"Hello","!") //call immediate call
person.greet.apply(anotherPerson,["Hru","!!"]) //apply same as call but put arguments in array
fnnew()


