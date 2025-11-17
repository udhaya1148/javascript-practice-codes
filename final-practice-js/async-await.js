function add(a, b) {
  return new Promise((resolve, reject) => {
    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("give is not a number"));
    } else {
      setTimeout(() => {
        resolve(a + b);
      }, 1000);
    }
  });
}

async function addition(){
    try{
        let result1 = await add(5,5);
        console.log(result1);

        let result2 = await add(result1,"5");
        console.log(result2)
    }
    catch(err){
        console.log(err.message)
    }
}

addition();
