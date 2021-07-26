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



function MovieData(url, method) {
    $.get(`https://allison-oscar-movie-project-assigment.glitch.me/movies`, {
        type: method,
        dataType: "json",
        url: url,

    }).done(function (movie) {
        var html = "";
        $("#Display1").empty();
        movie.forEach(function (day, index) {

                html = `<div id = "full">
                 
                  
                  <p>Title: ${movie.title}</p>
                    <hr>
                  <p>Rating: ${movie.rating}</p>
                    <hr>
                  <p>Description: ${movie.plot}</p>
                    <hr>
                  <p>Year: ${movie.year}</p>
                    <hr>
                  <p>Director: ${movie.director}</p
              </div>`;
                $('#Display1').append(html);

        })
    })
}

