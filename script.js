//Sticky NavBar
const head = document.querySelector("header");

function StickyNavBar() {

        head.classList.toggle("scrolled",window.scrollY>0);
}

window.addEventListener("scroll", StickyNavBar);

StickyNavBar();

//Scroll Reveal Animation

let sr =  ScrollReveal({
    duration:2500,
    distance:"60px",
});

sr.reveal(".showcase-info",{delay:600});
sr.reveal(".showcase-image", {origin:"top", delay:700}  );


