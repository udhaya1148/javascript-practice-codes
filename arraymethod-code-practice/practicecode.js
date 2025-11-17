// Given const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
// 👉 Use reduce() to count how many times each fruit appears.

const words = ["apple", "banana", "apple", "orange", "banana", "apple"];
const count = words.reduce((acc,fruit)=>{
    acc[fruit] = (acc[fruit] || 0)+1
    return acc
},[])
console.log(count)

// Given const arr = [5, 10, 15, 20, 25];
// 👉 Use every() to check if all numbers are greater than 0.
const arr = [5, 10, 15, 20, 25];
let greater = arr.every((n)=> n>0);
console.log(greater)

// Given const arr = [3, 6, 9, 12, 15];
// 👉 Use some() to check if any number is divisible by 5.
const arr1 = [3, 6, 9, 12, 16];
let div = arr1.some((n)=> n%5===0);
console.log(n)

//Given const arr = [1, [2, [3, [4]]]];
//👉 Use flat() to flatten the array completely.

const arr2 = [1, [2, [3, [4]]]];
const flat = arr2.flat(Infinity)
console.log(flat)

// Given const arr = ["React", "Angular", "Vue"];
// 👉 Use map() and toUpperCase() to create an array of capitalized framework names.

const arr3 = ["React", "Angular", "Vue"];
const upp = arr3.map((arr)=> arr.toUpperCase())
console.log(upp)

// Given const nums = [10, 20, 30, 40, 50];
// 👉 Use chaining (like filter().map().reduce()) to

// filter numbers > 20

// double them

// and sum them up.

const nums = [10, 20, 30, 40, 50];
const chain = nums.filter(n => n>20).map(n => n*2).reduce((a,b) => a+b)
console.log(chain)

//Given const arr = [3, 1, 4, 1, 5, 9];
// 👉 Use sort() to sort the array in ascending order.
const arr4 = [3, 1, 4, 1, 5, 9];
let sort = arr4.sort((a,b)=> a - b);
console.log(sort)

const arr5 = [3, 1, 4, 1, 5, 9];
let unique = [...new Set(arr5)].sort((a,b)=> a-b);
console.log(unique)

// Given const words = ["js", "is", "fun"];
// 👉 Use join() to make it a sentence: "js is fun".
const words1 = ["js", "is", "fun"];
let str = words1.join(" ")
console.log(str)

// Given const nums = [1, 2, 3, 4, 5];
// 👉 Use splice() to remove the 3rd element.

const nums1 = [1, 2, 3, 4, 5];
// nums1.splice(2,1);
nums1.splice(2,2,0,0)
console.log(nums1)

// Given const colors = ["red", "blue", "green"];
// 👉 Use includes() to check if "blue" exists in the array.

const colors = ["red", "blue", "green"];
let inc = colors.includes("blue");
console.log(inc)