/* ==========================================
   SHREE HARI CONSTRUCTION & DESIGNS
   script.js
========================================== */

/* ==========================================
   Animated Counter
========================================== */

const counters = document.querySelectorAll(".count");

const startCounter = () => {

    counters.forEach(counter => {

        const target = +counter.getAttribute("data-target");

        let count = 0;

        const speed = target / 120;

        const updateCounter = () => {

            count += speed;

            if (count < target) {

                counter.innerText = Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        };

        updateCounter();

    });

};

/* ==========================================
   Counter Starts on Scroll
========================================== */

let counterStarted = false;

window.addEventListener("scroll", () => {

    const counterSection = document.querySelector(".counter");

    if (!counterSection) return;

    const sectionTop = counterSection.offsetTop - 350;

    if (window.scrollY > sectionTop && !counterStarted) {

        startCounter();

        counterStarted = true;

    }

});

/* ==========================================
   Scroll Reveal Animation
========================================== */

const revealElements = document.querySelectorAll(

".card, .project-card, .about-text, .about-image, .contact-info, form"

);

function reveal() {

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;

        const revealTop = element.getBoundingClientRect().top;

        const revealPoint = 120;

        if (revealTop < windowHeight - revealPoint) {

            element.style.opacity = "1";

            element.style.transform = "translateY(0)";

        }

    });

}

revealElements.forEach((element) => {

    element.style.opacity = "0";

    element.style.transform = "translateY(60px)";

    element.style.transition = "0.8s ease";

});

window.addEventListener("scroll", reveal);

reveal();

/* ==========================================
   Active Navigation Link
========================================== */

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/* ==========================================
   Back To Top Button
========================================== */

const topButton = document.createElement("a");

topButton.href = "#home";

topButton.className = "top-btn";

topButton.innerHTML = '<i class="fa-solid fa-arrow-up"></i>';

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topButton.classList.add("show");

    } else {

        topButton.classList.remove("show");

    }

});

/* ==========================================
   Smooth Button Click Animation
========================================== */

document.querySelectorAll(".btn,.btn2").forEach(button => {

    button.addEventListener("click", function () {

        this.style.transform = "scale(.95)";

        setTimeout(() => {

            this.style.transform = "";

        }, 150);

    });

});

/* ==========================================
   WhatsApp Button
========================================== */

// const whatsapp = document.querySelector(".whatsapp");

// if (whatsapp) {

//     whatsapp.href =
//         "https://wa.me/919876543210?text=Hello%20Shree%20Hari%20Construction%20%26%20Designs.%20I%20need%20more%20information%20about%20your%20services.";

// }

/* ==========================================
   Contact Form
========================================== */

// const form = document.querySelector("form");

// if (form) {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         alert("Thank you! Your enquiry has been received. We will contact you shortly.");

//         form.reset();

//     });

// }

/* ==========================================
   Sticky Header Shadow
========================================== */

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.15)";

    } else {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.08)";

    }

});

const menuToggle = document.querySelector(".menu-toggle");
const menuIcon = document.querySelector(".menu-toggle i");
const mobileMenu = document.querySelector("#mobileMenu");

menuToggle.addEventListener("click",()=>{

    mobileMenu.classList.toggle("active");

    if(mobileMenu.classList.contains("active")){

        menuIcon.classList.remove("fa-bars");
        menuIcon.classList.add("fa-xmark");

    }else{

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    }

});

document.querySelectorAll("#mobileMenu a").forEach(link=>{

    link.addEventListener("click",()=>{

        mobileMenu.classList.remove("active");

        menuIcon.classList.remove("fa-xmark");
        menuIcon.classList.add("fa-bars");

    });

});

/* ==========================================
   Console Message
========================================== */

console.log("Shree Hari Construction & Designs Website Loaded Successfully!");