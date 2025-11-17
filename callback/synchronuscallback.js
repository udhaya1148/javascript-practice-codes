// Print using callback
// Write a function printMessage(callback) that prints "Task started", then calls callback to print "Task completed".

function printMessage(callback){
    console.log("task started");
    callback();
}

function print(){
    console.log('Task completed')
}
printMessage(print)

// Add numbers (callback)
// Write a function add(a, b, callback) which calculates the sum of a and b, and passes the result to the callback function.
function add(a,b,callback){
    let sum = a+b;
    callback(sum);
}

function printResult(result){
    console.log(result)
}

add(2,3,printResult)


// Greeting function
// Write a function greetUser(name, callback) that prints "Hello, <name>" and then runs the callback that prints "Welcome!".
function greetUser(name, callback){
    console.log("Hello",name);
    callback();
}
function greet(){
    console.log('Welcome !');
}

greetUser('Ramu',greet);