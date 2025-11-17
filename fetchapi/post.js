fetch("https://mimic-server-api.vercel.app/quotes",{
    method: "Post",
    headers: {
        "content-Type" : "application/json"
    },
    body: JSON.stringify({
        id:40,
        author:"A.P.J. Abdul Kalam",
        quotes:"Dream, Dream, Dream. Dreams transform into thoughts and thoughts result in action."
    })
})
//print sended data
.then((response)=>response.json())
.then((data)=> console.log(data))