// Get selected movie from storage
const movie = JSON.parse(localStorage.getItem("selectedMovie"));

// Elements
const title = document.getElementById("movieTitle");
const frame = document.getElementById("movieFrame");
const desc = document.getElementById("movieDesc");

// Load movie
if(movie){

    title.innerText = movie.title;

    frame.src = movie.movie;

    desc.innerText = "🎀 Enjoy your movie 🎀";

}else{

    title.innerText = "No Movie Selected";
    desc.innerText = "Go back and select a movie.";

}

// Back button
function goBack(){
    window.location.href = "movies.html";
}
