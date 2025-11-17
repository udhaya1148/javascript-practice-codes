arr=[1,2,3]

let total = arr.reduce((sum,n)=> sum+n ,0)

console.log(total);

let multi = arr.map((n)=>n*2);
console.log(multi);

let filter = arr.filter((n)=> n<3);
console.log(filter)