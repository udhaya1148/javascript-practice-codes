// Simulate server delay
// Create a function fetchData(callback) that waits 2 seconds using setTimeout,
//  then passes a fake data object { id: 1, name: "Udhay" } to the callback.

function fetchData(callback){
    setTimeout(()=>{
        let person ={
            id:1,
            name:'Udhay'
        }
        callback(person);
    },2000);
}

function displayData(data){
    console.log(data);
}

fetchData(displayData)