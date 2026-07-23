/* ===================================
   Select Elements
=================================== */

const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");


/* ===================================
   Mobile Menu Toggle
=================================== */

menuBtn.addEventListener("click", () => {

    navLinks.classList.toggle("active");

});


/* ===================================
   Close Menu After Click
=================================== */

navItems.forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("active");

    });

});


/* ===================================
   Smooth Scrolling
=================================== */

navItems.forEach(link => {

    link.addEventListener("click", function(event){

        event.preventDefault();

        const targetSection =
            document.querySelector(
                this.getAttribute("href")
            );


        targetSection.scrollIntoView({

            behavior:"smooth"

        });

    });

});


/* ===================================
   Active Navigation Highlight
=================================== */

const sections =
document.querySelectorAll("section");


window.addEventListener("scroll", () => {


    let current = "";


    sections.forEach(section => {


        const sectionTop =
            section.offsetTop - 150;


        const sectionHeight =
            section.clientHeight;


        if(
            window.scrollY >= sectionTop &&
            window.scrollY <
            sectionTop + sectionHeight
        ){

            current = section.getAttribute("id");

        }


    });


    navItems.forEach(link => {


        link.classList.remove("active");


        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }


    });


});
/* ===================================
   Contact Form Validation
=================================== */


const contactForm = document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event){

    event.preventDefault();


    const name =
    document.getElementById("name").value.trim();


    const email =
    document.getElementById("email").value.trim();


    const message =
    document.getElementById("message").value.trim();



    // Empty Field Validation

    if(
        name === "" ||
        email === "" ||
        message === ""
    ){

        alert("Please fill all fields!");

        return;

    }



    // Email Validation

    const emailPattern =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    if(!emailPattern.test(email)){

        alert("Please enter a valid email address!");

        return;

    }



    // Success Message

    alert(
        `Thank you ${name}! Your message has been sent successfully.`
    );


    contactForm.reset();


});



/* ===================================
   Scroll To Top Button
=================================== */


const scrollBtn =
document.createElement("button");


scrollBtn.innerHTML =
"↑";


scrollBtn.classList.add(
    "scroll-top"
);


document.body.appendChild(scrollBtn);



/* Show Button On Scroll */

window.addEventListener("scroll",()=>{


    if(window.scrollY > 400){

        scrollBtn.classList.add("show");

    }
    else{

        scrollBtn.classList.remove("show");

    }


});



/* Scroll To Top */

scrollBtn.addEventListener("click",()=>{


    window.scrollTo({

        top:0,

        behavior:"smooth"

    });


});
/* ===================================
   Dark Mode Toggle
=================================== */


const themeBtn = document.querySelector(".theme-btn");


const themeIcon =
themeBtn.querySelector("i");



themeBtn.addEventListener("click",()=>{


    document.body.classList.toggle("dark-mode");


    if(
        document.body.classList.contains("dark-mode")
    ){

        themeIcon.classList.remove("fa-moon");

        themeIcon.classList.add("fa-sun");

    }
    else{

        themeIcon.classList.remove("fa-sun");

        themeIcon.classList.add("fa-moon");

    }


});



/* ===================================
   Typing Animation
=================================== */


const typingElement =
document.getElementById("typing");


const words = [

    "Frontend Developer",

    "AI Student",

    "Python Programmer",

    "Web Developer"

];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;



function typeEffect(){


    const currentWord =
    words[wordIndex];


    if(!deleting){


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex++
        );


        if(charIndex > currentWord.length){

            deleting = true;

            setTimeout(typeEffect,1000);

            return;

        }


    }
    else{


        typingElement.textContent =
        currentWord.substring(
            0,
            charIndex--
        );


        if(charIndex < 0){

            deleting = false;

            wordIndex++;

            if(wordIndex >= words.length){

                wordIndex = 0;

            }

        }

    }


    setTimeout(typeEffect,100);

}



typeEffect();
/* ===================================
   Scroll Reveal Animation
=================================== */


const revealElements =
document.querySelectorAll(
    "section, .skill-card, .project-card"
);



function revealOnScroll(){


    revealElements.forEach(element=>{


        const windowHeight =
        window.innerHeight;


        const elementTop =
        element.getBoundingClientRect().top;


        const revealPoint = 120;



        if(elementTop < windowHeight - revealPoint){

            element.classList.add("show");

        }


    });


}


window.addEventListener(
    "scroll",
    revealOnScroll
);


revealOnScroll();



/* ===================================
   Save Dark Mode Preference
=================================== */


const savedTheme =
localStorage.getItem("theme");



if(savedTheme === "dark"){


    document.body.classList.add(
        "dark-mode"
    );


    themeIcon.classList.remove(
        "fa-moon"
    );


    themeIcon.classList.add(
        "fa-sun"
    );

}



themeBtn.addEventListener("click",()=>{


    if(
        document.body.classList.contains(
            "dark-mode"
        )
    ){

        localStorage.setItem(
            "theme",
            "dark"
        );

    }
    else{

        localStorage.setItem(
            "theme",
            "light"
        );

    }


});