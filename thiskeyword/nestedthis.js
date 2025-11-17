let person = {
    name:"kumar",
    city:"cbe",
    greet(){
        // console.log(this.name)
        // function inner(){
        //     console.log(this.name)
        // }
        const inner = (()=>console.log(this.name))
        inner()
        
    }
}
person.greet();