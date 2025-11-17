// function person(name = 'ram'){
//     console.log('Person name is:',name);
// }
// person('kumar')

let person={
    name:'kumar',
    msg(){
        (()=> console.log('Hi',this.name))();
    }
    // greet: ()=> console.log('Hi',this.name)
}
// person.greet();
person.msg();