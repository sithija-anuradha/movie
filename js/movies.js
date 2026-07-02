
// ==============================
// USER + GREETING
// ==============================
const userName = "Pancho🎀";

function setGreeting(){

    const hour = new Date().getHours();
    let greeting = "";

    if(hour < 12) greeting = "Good Morning";
    else if(hour < 17) greeting = "Good Afternoon";
    else if(hour < 21) greeting = "Good Evening";
    else greeting = "Good Night";

    const el = document.getElementById("greetingText");
    if(el) el.innerText = `${greeting}, ${userName}`;
}
setGreeting();

// ==============================
// DATA
// ==============================
const defaultMovies = [
{
    id:1,
    title:"Voicemails for Isabelle",
    poster:"https://placehold.co/300x450/111/fff?text=Isabelle",
    section:"favorites",
    movie:"https://streamimdb.ru/embed/movie/tt10375624"
}
];

let adminMovies = JSON.parse(localStorage.getItem("movies")) || [];
let movies = [...defaultMovies, ...adminMovies];

// ==============================
// ELEMENTS
// ==============================
const favoritesRow = document.getElementById("favoritesRow");
const requestedRow = document.getElementById("requestedRow");
const tonightRow = document.getElementById("tonightRow");
const recentRow = document.getElementById("recentRow");

// ==============================
// RENDER
// ==============================
function renderMovies(){

    favoritesRow.innerHTML = "";
    requestedRow.innerHTML = "";
    tonightRow.innerHTML = "";

    movies.forEach(movie => {

        const card = `
        <div class="card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster}">
            <p>${movie.title}</p>
        </div>
        `;

        if(movie.section === "favorites") favoritesRow.innerHTML += card;
        else if(movie.section === "requested") requestedRow.innerHTML += card;
        else if(movie.section === "tonight") tonightRow.innerHTML += card;
    });
}

// ==============================
// FEATURED (AUTO LATEST)
// ==============================
function loadFeaturedMovie(){

    const all = [...defaultMovies, ...adminMovies];
    const featured = all[all.length - 1];

    const box = document.getElementById("featuredBox");

    if(featured){
        box.innerHTML = `
        <div class="card" onclick="openMovie(${featured.id})">
            <img src="${featured.poster}">
            <p>${featured.title}</p>
        </div>`;
    } else {
        box.innerHTML = "<p>No Featured Movie</p>";
    }
}

// ==============================
// RECENT (ALL MOVIES)
// ==============================
function renderRecent(){

    const all = [...defaultMovies, ...adminMovies].slice().reverse();

    recentRow.innerHTML = "";

    all.forEach(movie => {

        recentRow.innerHTML += `
        <div class="card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster}">
            <p>${movie.title}</p>
        </div>`;
    });
}

// ==============================
// OPEN MOVIE
// ==============================
function openMovie(id){

    const movie = movies.find(m => m.id === id);

    localStorage.setItem("selectedMovie", JSON.stringify(movie));
    window.location.href = "watch.html";
}

// ==============================
// SEARCH
// ==============================
document.getElementById("searchInput").addEventListener("input", function(){

    const value = this.value.toLowerCase();

    const filtered = movies.filter(m =>
        m.title.toLowerCase().includes(value)
    );

    renderFiltered(filtered);
});

function renderFiltered(list){

    favoritesRow.innerHTML = "";
    requestedRow.innerHTML = "";
    tonightRow.innerHTML = "";
    recentRow.innerHTML = "";

    list.forEach(movie => {

        const card = `
        <div class="card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster}">
            <p>${movie.title}</p>
        </div>`;

        if(movie.section === "favorites") favoritesRow.innerHTML += card;
        else if(movie.section === "requested") requestedRow.innerHTML += card;
        else if(movie.section === "tonight") tonightRow.innerHTML += card;
    });
}

// ==============================
// INIT
// ==============================
renderMovies();
loadFeaturedMovie();
renderRecent();
