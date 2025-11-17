console.log('start');
setTimeout(()=>{
    console.log('time');
},0);
Promise.resolve()
.then(()=>console.log("promise"))

console.log('end')