
let timeline = gsap.timeline();
let menu = document.getElementById("menu");
let nav = document.querySelector("nav");
let navLinks = document.querySelectorAll("nav ul li");


menu.addEventListener("click", () => {

    if (nav.style.display === "block") {
        nav.style.display = "none";
    } else {
        nav.style.display = "block";
    }

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.style.display === "block") {
                nav.style.display = "none";
            } else {
                nav.style.display = "block";

            }
        })
    })
})


timeline.from('#brand', {
    opacity: 0,
    y: -50,
    duration: 0.5,
    ease: "ease-in"

})

timeline.from('nav ul li', {
    opacity: 0,
    y: -50,
    stagger: 0.1,
    duration: 0.5,
    ease: "ease-in"
})