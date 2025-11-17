// Division with error handling
// Write a function divide(a, b, callback) that calls callback(err, result):

// If b is 0 → err = "Cannot divide by zero!"

// Otherwise → result = a / b

function divide(a,b,callback){
    if(b === 0){
        callback('Cannot divide by zero',null);
    }
    else{
        callback(null,a/b)
    }
}

divide(10,0,(err,result)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log(result);
    }
})