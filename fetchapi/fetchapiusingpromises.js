const quotes = fetch("https://mimic-server-api.vercel.app/quotes");
quotes
  .then((response) => {
    if (!response.ok) {
      throw new Error('page not found')
    }
    return response.json();
  })
  
  .then((data) => console.log(data))
  .catch((error)=> console.log(error))
