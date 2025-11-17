let person={
    name:'kumar',
    msg(){
        (()=> console.log('Hi',this.name))();
    }
    // greet: ()=> console.log('Hi',this.name) // output: Hi undefined
}
// person.greet(); // output: Hi undefined
person.msg();