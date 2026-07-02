// 👤 User name (optional for future use)
const userName = "Pancho🎀";

// 🎬 MOVIE DATA
const movies = [
{
    id:1,
    title:"Voicemails for Isabelle",
    poster:"https://placehold.co/300x450/111/fff?text=Isabelle",
    section:"favorites"
},
{
    id:2,
    title:"Requested Movie 1",
    poster:"https://placehold.co/300x450/222/fff?text=Request",
    section:"requested"
},
{
    id:3,
    title:"Movie for Tonight",
    poster:"https://placehold.co/300x450/333/fff?text=Tonight",
    section:"tonight"
},
{
    id:4,
    title:"Recently Added Film",
    poster:"https://placehold.co/300x450/444/fff?text=New",
    section:"recent"
},
{
    id:5,
    title:"Another Favorite",
    poster:"https://placehold.co/300x450/555/fff?text=Fav",
    section:"favorites"
}
];

// ==============================
// RENDER MOVIES
// ==============================

function renderMovies(){

    movies.forEach(movie => {

        const card = `
        <div class="card" onclick="openMovie(${movie.id})">

            <img src="${movie.poster}" alt="${movie.title}">

            <p>${movie.title}</p>

        </div>
        `;

        if(movie.section === "favorites"){
            document.getElementById("favoritesRow").innerHTML += card;
        }

        if(movie.section === "requested"){
            document.getElementById("requestedRow").innerHTML += card;
        }

        if(movie.section === "tonight"){
            document.getElementById("tonightRow").innerHTML += card;
        }

        if(movie.section === "recent"){
            document.getElementById("recentRow").innerHTML += card;
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
// SEARCH FUNCTION
// ==============================

document.getElementById("searchInput").addEventListener("input", function(){

    const value = this.value.toLowerCase();

    document.querySelectorAll(".card").forEach(card => {

        const text = card.innerText.toLowerCase();

        if(text.includes(value)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }

    });

});

// ==============================
// INIT
// ==============================

renderMovies();
