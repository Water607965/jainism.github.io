// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let scrollY = window.scrollY;
        elements.forEach(el => {
            let offset = el.offsetTop;
            if (scrollY + window.innerHeight - 100 > offset) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// Loading Screen
window.addEventListener("load", function() {
    document.querySelector(".loading-screen").style.display = "none";
});

// Fade-in animation on scroll
document.addEventListener("DOMContentLoaded", function() {
    let elements = document.querySelectorAll(".fade-in");

    function checkScroll() {
        let scrollY = window.scrollY;
        elements.forEach(el => {
            let offset = el.offsetTop;
            if (scrollY + window.innerHeight - 100 > offset) {
                el.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkScroll);
    checkScroll();
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});
