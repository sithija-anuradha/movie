// Load existing movies
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// Add Movie
function addMovie(){

    const title = document.getElementById("title").value;
    const poster = document.getElementById("poster").value;
    const movie = document.getElementById("movie").value;
    const section = document.getElementById("section").value;

    if(!title || !poster || !movie){
        alert("Please fill all fields");
        return;
    }

    const newMovie = {
        id: Date.now(),
        title,
        poster,
        movie,
        section
    };

    movies.push(newMovie);

    localStorage.setItem("movies", JSON.stringify(movies));

    renderMovies();

    alert("Movie added successfully!");

}

// Render list
function renderMovies(){

    const list = document.getElementById("movieList");

    list.innerHTML = "";

    movies.forEach(m => {

        list.innerHTML += `
        <div class="movie-item">
            <b>${m.title}</b> - ${m.section}
        </div>
        `;

    });

}

// Start
renderMovies();
