// Theme Toggle Logic
const themeToggleButton = document.getElementById("toggle-button");
const toggleIcon = document.getElementById("toggle-icon");
const navbar = document.getElementById("main-navbar");

themeToggleButton.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";

    if (isDark.disabled) {
        // Switch to light theme
        document.body.setAttribute("data-theme", "light");
        toggleIcon.classList.replace("fa-circle-half-stroke", "fa-sun");
        navbar.classList.replace("navbar-dark", "navbar-light");
        themeToggleButton.classList.replace("btn-outline-light", "btn-outline-dark");
    } else {
        // Switch to dark theme
        document.body.setAttribute("data-theme", "dark");
        toggleIcon.classList.replace("fa-sun", "fa-circle-half-stroke");
        navbar.classList.replace("navbar-light", "navbar-dark");
        themeToggleButton.classList.replace("btn-outline-dark", "btn-outline-light");
    }
});
