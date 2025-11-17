arr=[0,1,2,3,4];
const[first,second,four]=arr
console.log(first);
console.log(second);
console.log(first,second,four)


let person = {
    name:'kumar',
    age:23,
    city:'cbe'
}
const{name,city}=person;
console.log(name,city);

arr1=[5,6,7,8];
console.log([...arr,...arr1]);

arr2={...person}
console.log('arr2:',arr2)