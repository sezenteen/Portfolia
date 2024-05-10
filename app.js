// Toggle
function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Slider
document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slides = document.querySelectorAll(".slider img");
    const intervalTime = 5000;

    const autoSlide = setInterval(function() {
        slideIndex = (slideIndex + 1) % slides.length;
        showSlide(slideIndex);
    }, intervalTime);

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = "block";
            } else {
                slide.style.display = "none";
            }
        });
    }
});