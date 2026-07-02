
// ==============================
// LOAD MOVIES
// ==============================
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// ==============================
// SAVE
// ==============================
function saveMovies(){
    localStorage.setItem("movies", JSON.stringify(movies));
}

// ==============================
// ADD MOVIE
// ==============================
function addMovie(){

    const title = document.getElementById("title").value;
    const poster = document.getElementById("poster").value;
    const movie = document.getElementById("movie").value;
    const section = document.getElementById("section").value;

    if(!title || !poster || !movie){
        alert("Fill all fields");
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
    saveMovies();
    renderAdminMovies();
}

// ==============================
// DELETE MOVIE
// ==============================
function deleteMovie(index){
    movies.splice(index, 1);
    saveMovies();
    renderAdminMovies();
}

// ==============================
// EDIT MOVIE
// ==============================
function editMovie(index){

    const newTitle = prompt("Edit Title:", movies[index].title);
    const newPoster = prompt("Edit Poster:", movies[index].poster);
    const newMovie = prompt("Edit Movie URL:", movies[index].movie);

    if(newTitle) movies[index].title = newTitle;
    if(newPoster) movies[index].poster = newPoster;
    if(newMovie) movies[index].movie = newMovie;

    saveMovies();
    renderAdminMovies();
}

// ==============================
// RENDER ADMIN LIST
// ==============================
function renderAdminMovies(){

    const list = document.getElementById("adminList");
    list.innerHTML = "";

    movies.forEach((m, i) => {

        list.innerHTML += `
        <div class="admin-card">
            <img src="${m.poster}" width="120">
            <h3>${m.title}</h3>

            <button onclick="editMovie(${i})">✏ Edit</button>
            <button onclick="deleteMovie(${i})">🗑 Delete</button>
        </div>
        `;
    });
}

// ==============================
// INIT
// ==============================
renderAdminMovies();
