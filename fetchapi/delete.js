fetch("https://mimic-server-api.vercel.app/quotes/40", {
  method: "DELETE",
}).then((response) => {
  if (response.ok) {
    console.log("sucessfully deleted");
  }
});
