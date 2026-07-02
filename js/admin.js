
// ==============================
// LOAD MOVIES
// ==============================
let movies = JSON.parse(localStorage.getItem("movies")) || [];

// ==============================
// ADD MOVIE
// ==============================
function addMovie(){

    const title = document.getElementById("title").value;
    const poster = document.getElementById("poster").value;
    const movie = document.getElementById("movie").value;
    const section = document.getElementById("section").value;

    if(!title || !poster || !movie) return alert("Fill all fields");

    const newMovie = {
        id: Date.now(),
        title,
        poster,
        movie,
        section
    };

    movies.push(newMovie);
    localStorage.setItem("movies", JSON.stringify(movies));

    renderAdminMovies();
}

// ==============================
// DELETE
// ==============================
function deleteMovie(index){

    movies.splice(index, 1);
    localStorage.setItem("movies", JSON.stringify(movies));

    renderAdminMovies();
}

// ==============================
// EDIT
// ==============================
function editMovie(index){

    const newTitle = prompt("New Title:", movies[index].title);
    const newPoster = prompt("New Poster:", movies[index].poster);

    if(newTitle) movies[index].title = newTitle;
    if(newPoster) movies[index].poster = newPoster;

    localStorage.setItem("movies", JSON.stringify(movies));

    renderAdminMovies();
}

// ==============================
// RENDER ADMIN
// ==============================
function renderAdminMovies(){

    const list = document.getElementById("adminList");
    list.innerHTML = "";

    movies.forEach((m, i) => {

        list.innerHTML += `
        <div class="admin-card">
            <img src="${m.poster}">
            <p>${m.title}</p>

            <button onclick="editMovie(${i})">✏ Edit</button>
            <button onclick="deleteMovie(${i})">🗑 Delete</button>
        </div>`;
    });
}

renderAdminMovies();
