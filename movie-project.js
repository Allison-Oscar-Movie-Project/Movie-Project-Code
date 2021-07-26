"use strict";
const serverUrl = "https://allison-oscar-movie-project-assigment.glitch.me/movies"

setTimeout(fade_out, 2000);

function fade_out() {
    $("#load").fadeOut().empty();
}

function AJAX(url, method = "GET", data){
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

AJAX(serverUrl)
    .then(data => console.log(data))

