'use strict'
const serverUrl = "http://www.omdbapi.com/?i=tt3896198&apikey=48e072d4"


fetch(serverUrl)
.then(response =>{
    return response.json();
})
.then(users => {
    console.log(users)
})




