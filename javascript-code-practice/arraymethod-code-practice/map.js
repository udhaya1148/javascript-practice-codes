//Double each number using map()
const numbers = [2, 4, 6, 8];

const doublenumbers = numbers.map((n)=> n*2)
console.log(doublenumbers)

//Convert names to uppercase using map()
const names=["ram","kumar"]
const uppercasenames = names.map((name)=> name.toUpperCase())
console.log(uppercasenames)

// Filter numbers greater than 50 using filter()
const scores = [20, 55, 80, 45, 100];

const findgreater = scores.filter((score)=> score > 50 )
console.log(findgreater)

// Get only even numbers using filter()
const nums = [11, 22, 33, 44, 55];
const evennum = nums.filter((even)=> even %2 ===0)
console.log(evennum)

// Calculate total using reduce()
const prices = [100, 200, 300, 400];

const total = prices.reduce((a,b)=> a+b,0)
console.log(total)

//Get only student names who scored above 80
const students = [
  { name: "Asha", marks: 75 },
  { name: "Ravi", marks: 85 },
  { name: "Priya", marks: 92 }
];
// Output: ["Ravi", "Priya"]

let scoreabove80= Object.values(students).filter(score => score.marks > 80).map(names => names.name);
console.log(scoreabove80)

//Square and sum all numbers
const numb = [2, 3, 4];
// Steps:
// 1️⃣ Square each → [4, 9, 16]
// 2️⃣ Sum → 29
// Output: 29

const sum = numb.map((n)=> n*n).reduce((a,b) => a+b, 0);
console.log(sum)

// Find the longest word in an array
const words = ["sun", "elephant", "cat", "dinosaur"];
// Output: "dinosaur"

const longword = words.reduce((a,b)=> a.length > b.length ?a:b)
console.log(longword)

// Group people by age using reduce()
const people = [
  { name: "Ravi", age: 20 },
  { name: "Maya", age: 25 },
  { name: "Arun", age: 20 }
];

let age = Object.values(people).reduce((acc,person)=>{

    if(!acc[person.age]){
        acc[person.age]=[];
    }

    acc[person.age].push(person)

    return acc;
},{})

console.log(age)
// Output:
// {
//   20: [{ name: "Ravi", age: 20 }, { name: "Arun", age: 20 }],
//   25: [{ name: "Maya", age: 25 }]
// }

//Count how many times each word appears
const word = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = word.reduce((acc,word)=>{
    acc[word]=(acc[word] || 0)+1
    console.log(acc)
    return acc;
},{})

console.log(count)
// Output:
// {
//   apple: 3,
//   banana: 2,
//   orange: 1
// }


//Get all unique numbers
const value = [2, 4, 2, 5, 4, 6, 5];
const unique = [...new Set(value)]
console.log(unique)
// Output: [2, 4, 5, 6]

//Find the person with the highest salary
const employees = [
  { name: "Asha", salary: 35000 },
  { name: "Ravi", salary: 55000 },
  { name: "Priya", salary: 48000 }
];

let highest = null;
for(key in employees){
  if(!highest || employees[key].salary > highest.salary){
    highest = employees[key]
  }
}
console.log(highest)
// Output: { name: "Ravi", salary: 55000 }

