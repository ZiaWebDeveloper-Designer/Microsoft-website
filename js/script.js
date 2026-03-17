const hamburger = document.querySelector(".humburger");
const navLinks = document.querySelector(".nav-links");
const navRight = document.querySelector(".nav-right");

hamburger.addEventListener("click", function () {
    navLinks.classList.toggle("active");
    navRight.classList.toggle("active");

    hamburger.classList.toggle("open");
});
