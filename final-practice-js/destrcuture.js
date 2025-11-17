arr=[10,20,30,40,50]

let [first,second,,four] = arr
console.log(first,second,four)

obj={name:'kumar',city:'cbe',age:23}
let {name,age} = obj
console.log(name,age)


let [a,b,...rest]= arr
console.log(a,b);
console.log(rest);