// Main JavaScript
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if(link.getAttribute("href") === "#" + current){

            link.classList.add("active");

        }

    });

});

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("sticky");

    }else{

        header.classList.remove("sticky");

    }

});

// ============================
// Scroll Reveal Animation
// ============================

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if(entry.isIntersecting){

            entry.target.classList.add("show");

        }

    });

});

hiddenElements.forEach((el)=>observer.observe(el));

// ============================
// Project Card Animation
// ============================

const cards = document.querySelectorAll(".project-card");

const cardObserver = new IntersectionObserver((entries)=>{

    entries.forEach((entry,index)=>{

        if(entry.isIntersecting){

            setTimeout(()=>{

                entry.target.classList.add("show");

            }, index*120);

        }

    });

});

cards.forEach(card=>cardObserver.observe(card));
