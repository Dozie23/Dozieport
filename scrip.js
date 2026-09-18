```javascript
/* =====================================================
   DOZIE BEN PORTFOLIO JAVASCRIPT
   ===================================================== */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");


// ================= MOBILE MENU =================

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("active");

});


// Close menu when a link is clicked

document.querySelectorAll(".navbar a").forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("active");

    });

});


// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;


    if (
        name.trim() === "" ||
        email.trim() === "" ||
        subject.trim() === "" ||
        message.trim() === ""
    ) {

        formMessage.textContent = "Please fill in all fields.";

        return;

    }


    /*
       For now this displays a success message.

       Later, this form can be connected to:
       - PHP
       - MySQL
       - Formspree
       - EmailJS
       - A custom backend
    */

    formMessage.textContent =
        "Thank you, " + name + ". Your message is ready to be sent.";

    contactForm.reset();

});


// ================= SIMPLE SCROLL REVEAL =================

const revealElements = document.querySelectorAll(
    ".service-card, .project-card, .mini-skill, .about-content, .contact-form"
);

const revealOnScroll = () => {

    revealElements.forEach(element => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 80) {

            element.classList.add("show");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
```
