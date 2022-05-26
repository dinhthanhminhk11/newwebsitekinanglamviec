
//  Declaring variables as objects from the document
let menuToggler = document.querySelector(".nav-button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");


//  Listen for a click on the nav-button, when this happens, toggle the class "open" on body, if clicked again
//  toggle the class off...this will make all the css declarations involving the class "open" to take effect,
//  as this is being applied to the entire body!
menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});


// When a link is clicked, toggle the open class to be removed from body, thus closing the menu
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});


// Carousel / Slideshow
$(document).ready(function (){
    $(".carousel").slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true
    });
});