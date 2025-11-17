//How do you merge two objects:

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };

console.log({...obj1, ...obj2}) // it cannot change any existing object
console.log(Object.assign(obj1,obj2)) //assign changed existing first object
console.log(obj1)
console.log(obj2)