// Get elements
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

// Toggle menu
hamburger.addEventListener("click", () => {
    if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
    } else {
        menu.style.display = "none";
    }
});

