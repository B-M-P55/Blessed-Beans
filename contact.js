// FORM
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Message sent successfully! ✔️");
    this.reset();
  });
}

// MOBILE MENU
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

if (toggle) {
  toggle.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
}