//How do you loop over all values of the object person using for...in?
let person = {
    name:'kumar',
    age:23,
    city:'cbe',
    gender:'male'
}
for(key in person){
    console.log(person[key]);
}