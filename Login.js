const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("submit");
const loginErrorMsg = document.getElementById("errorMsg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "1234") {
        alert("You have successfully logged in.");
        // location.reload();
        location.href = "Books.html"
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})