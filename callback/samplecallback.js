function greet(callback){
    let name ='ram';
    console.log("hello",name);
    callback(name)
}

function print(name){
    console.log("hai",name);
}

greet(print);