async function fetchquotes() {
  try {
    const quotes = await fetch("https://mimic-server-api.vercel.app/invalid"); //fetch data from api
    // error handling
    if(!quotes.ok){ 
        throw new Error("url invalid")
    }
    const data = await quotes.json(); //convert response to json format
    console.log(data); // print data
  } catch (error) { //catch error
    console.log(error); // print error
  }
  //-----------------------------------
} 
fetchquotes(); //function call 
