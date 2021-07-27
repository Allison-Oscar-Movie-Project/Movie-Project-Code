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

let localMovies = [];

function movieData() {
    $.get(`https://allison-oscar-movie-project-assigment.glitch.me/movies`, {
        dataType: "json",
    }).done(function (movies) {
        localMovies = movies;
        var html = "";
        $("#display1").empty();
        movies.forEach(function (movie) {

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
                  <input name="submit" type="submit" value = "edit"  data-id=${movie.id} class= "editMovie">
                  
               
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
    $(document).on('click','.editMovie',function(event){
   // $(".editMovie").click( function (event) {
       event.preventDefault();

        var movieId = $(this).attr("data-id")
        const currentMovie = localMovies.filter(function(movie){
            return movie.id == movieId
        })[0];
        console.log(currentMovie)
        let formToEdit = `
         <form>
      <label for="movieNameToEdit${movieId}"></label><input type="text" value = "${currentMovie.title}" name="movieNameToEdit${movieId}" id="movieNameToEdit${movieId}" placeholder="Name">
     <label for="movieRatingToEdit${movieId}"></label><input type="text" value = "${currentMovie.rating}" name="movieRatingToEdit${movieId}" id="movieRatingToEdit${movieId}" placeholder="Rating">
      <label for="movieDesToEdit${movieId}"></label><input type="text" value = "${currentMovie.plot}" name="movieDesToEdit${movieId}" id="movieDesToEdit${movieId}" placeholder="Description">
      <input name="saveChanges${movieId}" type="submit" value="Submit" id="submit_movie${movieId}">
    </form>`
        $(this).parent().html(formToEdit);
        $(`#submit_movie${movieId}`).click(function(event){
            event.preventDefault()
         const newMovieObject = {
             title: $(`#movieNameToEdit${movieId}`).val(),
             rating: $(`#movieRatingToEdit${movieId}`).val(),
            plot: $(`#movieDesToEdit${movieId}`).val()
         }
            $.ajax(serverUrl + "/" + movieId,{
                type: 'PATCH',
                data: newMovieObject
            }).done(movieData)
        })
    });
});

