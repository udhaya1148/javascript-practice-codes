async function patch() {
  let response = await fetch("https://mimic-server-api.vercel.app/quotes/37", {
    method: "DELETE",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       id: 38,
    //       author: "https://mimic-server-api.vercel.app/quotes",
    //       quotes: "The only way to do great work is to love what you do.",
    //     }),
  });

//   let data = await response.json();
//   console.log(data);
}

patch();
