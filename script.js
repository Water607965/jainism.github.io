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

// ✅ Make Philosophy Section Items Fade in on Scroll
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

// ✅ Fade-in Animation on Scroll
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

// ✅ Smooth Page Transition on Click
document.querySelectorAll(".chapter-btn").forEach(button => {
    button.addEventListener("click", function(event) {
        event.preventDefault();
        let href = this.getAttribute("href");
        document.body.style.opacity = 0;
        setTimeout(() => {
            window.location.href = href;
        }, 500);
    });
});

// ✅ Ensure Page Fades Back In on Load
window.addEventListener("pageshow", function() {
    document.body.style.opacity = 1;
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");

    form.addEventListener("submit", async function(event) {
        event.preventDefault(); // Prevent page reload

        const formData = new FormData(form);

        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        });

        if (response.ok) {
            document.getElementById("success-message").style.display = "block";
            form.reset(); // Clear the form after successful submission
        } else {
            alert("❌ Error sending message. Please try again.");
        }
    });
});


