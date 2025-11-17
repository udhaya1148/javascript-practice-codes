//How do you check if a property age exists in the object person?
let person = {
    name:'kumar',
    age:23,
    city:'cbe',
    gender:'male'
}
//console.log('age' in person)
if('age' in person){
    console.log('age property exists');
}
else{
    console.log('age property not exists');
}