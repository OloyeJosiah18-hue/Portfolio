// Active Nav Link on Scroll

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if(pageYOffset >= sectionTop - 200){
        current = section.getAttribute("id");
    }
    });

    navLinks.forEach(link => {
    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){
        link.style.color = "#38bdf8";
    } else {
        link.style.color = "#fff";
    }
    });
});

// Smooth Fade Animation
const cards = document.querySelectorAll(".project-card, .about-box");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;

    if(cardTop < window.innerHeight - 50){
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
    }
    });
});

cards.forEach(card => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
    card.style.transition = "0.6s ease";
});