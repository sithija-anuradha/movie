// Password
const correctPassword = "Nuheli";

// Elements
const passwordInput = document.getElementById("password");
const loginBtn = document.getElementById("loginBtn");
const togglePassword = document.getElementById("togglePassword");

// Show / Hide Password
togglePassword.addEventListener("click", () => {

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        togglePassword.textContent = "🙈";
    } else {
        passwordInput.type = "password";
        togglePassword.textContent = "👁";
    }

});

// Login
function login() {

    const password = passwordInput.value.trim();

    if (password === correctPassword) {

        loginBtn.textContent = "Loading...";

        setTimeout(() => {

            window.location.href = "movies.html";

        }, 1000);

    } else {

        alert("Password Eka Waradi Pancho😪");

        passwordInput.value = "";
        passwordInput.focus();

    }

}

// Button click
loginBtn.addEventListener("click", login);

// Press Enter
passwordInput.addEventListener("keydown", function (e) {

    if (e.key === "Enter") {
        login();
    }

});
