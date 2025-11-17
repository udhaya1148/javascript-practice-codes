function greet(name){
    return new Promise((resolve)=>{
        resolve(name);
    })
}
greet("ram")
.then((name1)=> {
    console.log("hi",name1);
    return greet("sham")
})
.then((name2)=>{
    console.log("hello",name2);
})

