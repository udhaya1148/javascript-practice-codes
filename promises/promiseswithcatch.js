// Sequential addition
// Using callbacks, perform:

// add(5, 5) → add(result, 10) → add(result, 20)

// Each should happen after 1 second, and finally print "Final result: 40".

function add(a, b) {
  return new Promise((resolve,reject) => {
    setTimeout(() => {
        if(typeof a!=='number' || typeof b!=='number'){
            reject('Given value is not a number')
        }
        else{
           resolve(a+b); 
        }
    }, 1000);
  });
}
add(5,5)
.then((result1)=>{
    console.log('first',result1);
    return add(result1,10);
})
.then((result2)=>{
    console.log('second',result2);
    return add(result2,20);
})
.then((result3)=>{
    console.log('final',result3);
})
.catch(err => console.log(err))
.finally(console.log('completed'))