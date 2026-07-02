
// ==============================
// USER
// ==============================
const userName = "Pancho🎀";

// ==============================
// GUEST GREETING (optional safe)
// ==============================
function setGreeting(){

    const hour = new Date().getHours();
    let greeting = "";

    if(hour < 12){
        greeting = "Good Morning";
    }
    else if(hour < 17){
        greeting = "Good Afternoon";
    }
    else if(hour < 21){
        greeting = "Good Evening";
    }
    else{
        greeting = "Good Night";
    }

    const el = document.getElementById("greetingText");
    if(el){
        el.innerText = `${greeting}, ${userName}`;
    }
}

setGreeting();

// ==============================
// DEFAULT MOVIES
// ==============================
const defaultMovies = [
{
    id:1,
    title:"Voicemails for Isabelle",
    poster:"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTNIAg11tVML7vTgmP8R97YxiIZ-y0_8b57UaVHRzPEy_tkYS5I",
    section:"favorites",
    movie:"https://streamimdb.ru/embed/movie/tt10375624"
}
];

// ==============================
// LOAD ADMIN MOVIES
// ==============================
let adminMovies = JSON.parse(localStorage.getItem("movies")) || [];

// merge
let movies = [...defaultMovies, ...adminMovies];

// ==============================
// ELEMENTS
// ==============================
const favoritesRow = document.getElementById("favoritesRow");
const requestedRow = document.getElementById("requestedRow");
const tonightRow = document.getElementById("tonightRow");
const recentRow = document.getElementById("recentRow");

// ==============================
// RENDER MOVIES
// ==============================
function renderMovies(){

    favoritesRow.innerHTML = "";
    requestedRow.innerHTML = "";
    tonightRow.innerHTML = "";
    recentRow.innerHTML = "";

    movies.forEach(movie => {

        const card = `
        <div class="card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster}">
            <p>${movie.title}</p>
        </div>
        `;

        if(movie.section === "favorites"){
            favoritesRow.innerHTML += card;
        }
        else if(movie.section === "requested"){
            requestedRow.innerHTML += card;
        }
        else if(movie.section === "tonight"){
            tonightRow.innerHTML += card;
        }
        else if(movie.section === "recent"){
            recentRow.innerHTML += card;
        }

    });

}

// ==============================
// FEATURED MOVIE FIX
// ==============================
function loadFeaturedMovie(){

    const allMovies = [...defaultMovies, ...adminMovies];

    const featured = allMovies.find(m => m.section === "featured");

    const box = document.getElementById("featuredBox");

    if(featured){

        box.innerHTML = `
        <div class="card" onclick="openMovie(${featured.id})">
            <img src="${featured.poster}">
            <p>${featured.title}</p>
        </div>
        `;

    } else {
        box.innerHTML = "<p>No Featured Movie Selected</p>";
    }

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
document.getElementById("searchInput").addEventListener("input", function () {

    const value = this.value.toLowerCase();

    const filtered = movies.filter(movie =>
        movie.title.toLowerCase().includes(value)
    );

    renderFilteredMovies(filtered);

});

function renderFilteredMovies(list){

    favoritesRow.innerHTML = "";
    requestedRow.innerHTML = "";
    tonightRow.innerHTML = "";
    recentRow.innerHTML = "";

    list.forEach(movie => {

        const card = `
        <div class="card" onclick="openMovie(${movie.id})">
            <img src="${movie.poster}">
            <p>${movie.title}</p>
        </div>
        `;

        if(movie.section === "favorites"){
            favoritesRow.innerHTML += card;
        }
        else if(movie.section === "requested"){
            requestedRow.innerHTML += card;
        }
        else if(movie.section === "tonight"){
            tonightRow.innerHTML += card;
        }
        else if(movie.section === "recent"){
            recentRow.innerHTML += card;
        }

    });

}

// ==============================
// INIT
// ==============================
renderMovies();
loadFeaturedMovie();
