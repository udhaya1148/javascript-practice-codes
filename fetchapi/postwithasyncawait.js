// fetch("https://mimic-server-api.vercel.app/quotes",{
//     method: "Post",
//     headers: {
//         "content-Type" : "application/json"
//     },
//     body: JSON.stringify({
//         id:40,
//         author:"A.P.J. Abdul Kalam",
//         quotes:"Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action."
//     })
// })
// //print sended data
// .then((response)=>response.json())
// .then((data)=> console.log(data))

async function createQuotes(){
    try{
        let quotes = await fetch("https://mimic-server-api.vercel.app/quotes",{ //await pauses execution until the Promise resolves
            method:"POST",
            headers:{
                "content-Type": "application/json"
            },
            body:JSON.stringify({
                id:39,
                author:"A.P.J. Abdul Kalam",
                quotes:"Life is a difficult game. You can win it only by retaining your birthright to be a person."
            })
        });
        if(!quotes.ok){
            throw new Error("Unable to send");
        }

        const data = await quotes.json()
        console.log(data)
    }
    catch(err){
        console.log(err);
    }
}
createQuotes();