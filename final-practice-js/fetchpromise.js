let response=fetch("https://mimic-server-api.vercel.app/quotes")
.then((response)=>{
    if(!response.ok){
        throw new Error("invalid url");
    }
    else{
        return response.json()
    }
})
.then((data)=> console.log(data))
.catch((err)=> console.log(err.message))
