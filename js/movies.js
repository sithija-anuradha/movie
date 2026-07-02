// ==============================
// Movie Data
// ==============================

const movies = [

{
    id:1,
    title:"Voicemails for Isabelle",
    year:"2025",
    genre:"Romance",

    poster:"https://placehold.co/400x600/111111/ffffff?text=Voicemails+for+Isabelle",

    movie:"https://streamimdb.ru/embed/movie/tt10375624"
},

{
    id:2,
    title:"Coming Soon",
    year:"2026",
    genre:"Action",

    poster:"https://placehold.co/400x600/222222/ffffff?text=Coming+Soon",

    movie:"#"
},

{
    id:3,
    title:"Coming Soon",
    year:"2026",
    genre:"Drama",

    poster:"https://placehold.co/400x600/333333/ffffff?text=Coming+Soon",

    movie:"#"
}

];

// ==============================
// Elements
// ==============================

const movieGrid = document.getElementById("movieGrid");
const searchInput = document.getElementById("searchInput");

// ==============================
// Display Movies
// ==============================

function displayMovies(movieList){

    movieGrid.innerHTML="";

    movieList.forEach(movie=>{

        movieGrid.innerHTML += `

        <div class="movie-card">

            <img src="${movie.poster}" alt="${movie.title}">

            <div class="movie-info">

                <h3>${movie.title}</h3>

                <p>${movie.year} • ${movie.genre}</p>

                <button onclick="watchMovie(${movie.id})">
                    ▶ Watch Now
                </button>

            </div>

        </div>

        `;

    });

}

// ==============================
// Search
// ==============================

searchInput.addEventListener("input",()=>{

    const keyword = searchInput.value.toLowerCase();

    const filtered = movies.filter(movie=>

        movie.title.toLowerCase().includes(keyword)

    );

    displayMovies(filtered);

});

// ==============================
// Watch Movie
// ==============================

function watchMovie(id){

    const movie = movies.find(m=>m.id===id);

    localStorage.setItem("selectedMovie",JSON.stringify(movie));

    window.location.href="watch.html";

}

// ==============================
// Start
// ==============================

displayMovies(movies);
