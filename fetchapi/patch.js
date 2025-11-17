fetch("https://mimic-server-api.vercel.app/quotes/2", {
  method: "PATCH",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    author: "A.P.J. Abdul Kalam sir " // only this author field will change
  })
})
  .then(res => res.json())
  .then(data => console.log("PATCH response:", data));
