const userName = "Pancho🎀";

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

    document.getElementById("greetingText").innerText =
    `${greeting}, ${userName} `;

}

setGreeting();
// ==============================
// LOAD MOVIES (ADMIN + DEFAULT)
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

// Get admin movies
let adminMovies = JSON.parse(localStorage.getItem("movies")) || [];

// Merge both
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

    document.querySelectorAll(".card").forEach(card => {

        const text = card.innerText.toLowerCase();

        card.style.display = text.includes(value) ? "block" : "none";

    });

});

// ==============================
// INIT
// ==============================

renderMovies();
