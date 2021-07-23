"use strict";
const serverUrl = "https://allison-oscar-movie-project-assigment.glitch.me/movies"

// fetch(serverUrl)
//   .then(res => res.json())
//   .then(data => console.log(data))
//
// const objToSend = {
//     user: "Allison",
//     message: "is hyped about the project"
// };
// const options = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(objToSend),
// };
// fetch(serverUrl, options)
//     .then( response => console.log(response) ) /* review was created successfully */
//     .catch( error => console.error(error) ); /* handle errors */

function AJAX(url,method = "GET", data){
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    };

    return fetch(url, options)
        .then(res => res.json())
        .then(responseData => responseData)
        .catch(err => err)
}

    // AJAX(serverUrl, "POST",{title: "Jquery is really confusing"})
    //     .then(function(data){
    //         console.log(data)
    //     })
// fetch a single movie
//     AJAX(serverUrl + "/3")
//     .then(data => console.log(data))

//PUT METHOD
// This is to update an individual record
// AJAX(serverUrl + "/9", "PUT", {
//     name: "Polaris",
//     message: "We are ready for the weekend!!"
// }).then(data => console.log(data))

//PATCH METHOD
//  AJAX(serverUrl + "/9", "PATCH", {
//     message: "We are really ready for the weekend!!"
//  })
//      .then(data => console.log(data))

// DELETE METHOD
//     AJAX(serverUrl + "/11", "DELETE")
//     .then(data => console.log(data))

     AJAX(serverUrl)
    .then(data => console.log(data))