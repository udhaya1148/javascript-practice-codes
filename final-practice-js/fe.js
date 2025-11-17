async function get(){
  try{
      let response = await fetch("https://mimic-server-api.vercel.app/quote");
    if(!response.ok){
        throw new Error("invalid url")
    }
    else{
        let data = await response.json()
        console.log(data)
    }
  }
  catch(err){
    console.log(err.message);
  }
}

get()