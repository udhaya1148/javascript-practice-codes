fetch("https://mimic-server-api.vercel.app/quotes",{
    method: "PUT",
    headers: {
        "content-Type": "application/json"
    },
    body: JSON.stringify({
        id:40,
        author:"A.P.J. Abdul Kalam",
        quotes:"Failure will never overtake me if my determination to succeed is strong enough."
    })
})
//print sended data
.then((response)=>response.json())
.then((data)=> console.log('updated',data))
.catch((error)=> console.log(error))