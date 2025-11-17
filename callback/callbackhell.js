// Async workflow simulation
// Create three async functions:

// step1(cb) → wait 1s → print "Step 1 done"

// step2(cb) → wait 1s → print "Step 2 done"

// step3(cb) → wait 1s → print "Step 3 done"
// Then chain them in order using callbacks.

function step1(callback){
    setTimeout(()=>{
        console.log('Step 1 done')
        callback();
    },1000)
    
}

function step2(callback){
    setTimeout(()=>{
        console.log('Step 2 done')
        callback();
    },1000)
    
}

function step3(callback){
    setTimeout(()=>{
        console.log('Step 3 done')
        callback();
    },1000)
    
}

step1(()=>{
    step2(()=>{
        step3(()=>{
        });
    });
});

