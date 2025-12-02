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

// Cocktail Ingredients Dataset 
fetch("data/final_cocktails.csv")
  .then(response => response.text())
  .then(csv => {
      console.log(csv); // raw CSV text
  })
  .catch(err => console.error("Error reading file:", err));


// Age Verification Popup
document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("age-popup");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  // If user already confirmed, skip popup
  if (localStorage.getItem("ageVerified") === "true") {
    popup.style.display = "none";
  }

  yesBtn.addEventListener("click", () => {
    localStorage.setItem("ageVerified", "true");
    popup.style.display = "none";
  });

  noBtn.addEventListener("click", () => {
    alert("You must be 21 or older to enter this site.");
    window.location.href = "https://www.google.com";
  });
});

// Contact Form Submission Alert

document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // stop form from actually submitting
    alert("Message sent!");
    event.target.reset();
});


