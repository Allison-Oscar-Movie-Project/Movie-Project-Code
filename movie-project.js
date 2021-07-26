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
        movie.forEach(function (movie) {

                html = `<div id = "full">
                 
               
                  <p id = "movie-title-${movie.id}">Title: ${movie.title}</p>
                    <hr>
                  <p id = "movie-rating-${movie.id}">Rating: ${movie.rating}</p>
                    <hr>
                  <p id = "movie-desc-${movie.id}">Description: ${movie.plot}</p>
                    <hr>
                  <pid = "movie-year-${movie.id}"> ${movie.year}</p>
                    <hr>
                  <pid = "movie-director-${movie.id}">Director: ${movie.director}</p
                  <hr>
                  <input name="submit" type="submit" data-id=${movie.id} class= "editMovie">
                  
                  <input name = "submit" type="submit" >
              </div>`

                $('#display1').append(html);
        })
    })
}

movieData(serverUrl, "GET")

$(function () {
    $("#submit_movie").click( function (event) {

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

        })
    });
});

$(function clickEdit () {
    $(document).on('click','.editMovie',function(){
   // $(".editMovie").click( function (event) {
      //  event.preventDefault();
        $(this).parent().attr('contenteditable', 'true');
 var movieId = $(this).attr("data-id")
        $.ajax(serverUrl + "/" + movieId,{
            type: 'PATCH',
            data: {
                title: $(`#movie-title-${movieId}`).val(),
                rating: $(`#movie-rating-${movieId}`).val(),
                plot: $(`#movie-desc-${movieId}`).val()
            }
        })
        console.log(divValue)
    });
});

