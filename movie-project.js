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



function movieData(url, method) {
    $.get(`https://allison-oscar-movie-project-assigment.glitch.me/movies`, {
        type: method,
        dataType: "json",
        url: url,
    }).done(function (movie) {
        var html = "";
        $("#display1").empty();
        movie.forEach(function (movie, index) {
            if (index < 5) {
                html = `<div id = "full">
                 
               
                  <p>Title: ${movie.title}</p>
                    <hr>
                  <p>Rating: ${movie.rating}</p>
                    <hr>
                  <p>Description: ${movie.plot}</p>
                    <hr>
                  <p> ${movie.year}</p>
                    <hr>
                  <p>Director: ${movie.director}</p
              </div>`;
                $('#display1').append(html);
            }
        })
    })
}

movieData(serverUrl, "GET")

$(function () {
    $("#submit_movie").click( function (event) {
        // using this page stop being refreshing
        event.preventDefault();

        $.ajax(serverUrl,{
            type: 'POST',
            data: {
                title: $("#movieName").val(),
                rating: $("#movieRating").val(),
                plot: $("#movieDes").val()
            }


        }).done(function (data){
            $("#movieName").val("")
            $("#movieRating").val("")
            $("#movieDes").val("")

            $('#display1').append(data.title);
        })
    });
});


// $document.ready(function (){
//     $('form').submit(function (event){
//         event.preventDefault()
//
//         var firstname = document.getElementById("").value
//         var lastname = document.getElementById("").value
//
//         $.post('')
//     })
// })