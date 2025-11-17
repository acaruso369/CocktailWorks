
const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

menu.style.display = "none"; // Initially hide the menu

// Toggle the menu display when the hamburger icon is clicked
    hamburger.addEventListener("click", () => {
        if (menu.style.display === "none") {
            menu.style.display = "flex";      // show menu
            menu.style.flexDirection = "column"; // vertical links
        } else {
            menu.style.display = "none";      // hide menu
        }
    });
    
    

