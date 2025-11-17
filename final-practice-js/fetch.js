//"https://mimic-server-api.vercel.app/quotes"

async function get() {
  try {
    let response = await fetch("https://mimic-server-api.vercel.app/quotes");

    if (!response.ok) {
      throw new Error("url invalid");
    } else {
      let data = await response.json();
      console.log(data);
    }
  } catch (err) {
    console.log(err.message);
  }
}

get();
