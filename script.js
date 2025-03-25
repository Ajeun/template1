//Button
const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header-content h1", {
  ...scrollRevealOption,
});
ScrollReveal().reveal(".header-content h2", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header-content p", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header-content .header-btn", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about-card", {
  duration: 1000,
  interval: 500,
});

ScrollReveal().reveal(".trainer-card", {
  ...scrollRevealOption,
  interval: 500,
});

ScrollReveal().reveal(".blog-card", {
  ...scrollRevealOption,
  interval: 500,
});

const swiper = new Swiper(".swiper", {
  loop: true,

  pagination: {
    el: ".swiper-pagination",
  },
});

//Slideshow
let currentImageIndex = 0;
const images = document.querySelectorAll('.slideshow img');

function switchImage() {
  images[currentImageIndex].classList.remove('active');
  currentImageIndex = (currentImageIndex + 1) % images.length;
  images[currentImageIndex].classList.add('active');
}

setInterval(switchImage, 5000);

//Form
document.addEventListener("DOMContentLoaded", function () {
    const footerForm = document.getElementById("footerForm");

    footerForm.addEventListener("submit", function (event) {
        event.preventDefault();

        fetch(footerForm.action, {
            method: footerForm.method,
            body: new FormData(footerForm),
            headers: { 'Accept': 'application/json' }
        }).then(response => {
            if (response.ok) {
                footerForm.reset();
                showFooterThankYouMessage();
            } else {
                alert("There was an issue submitting the form. Please try again.");
            }
        }).catch(() => {
            alert("Something went wrong. Please try again later.");
        });
    });

    function showFooterThankYouMessage() {
        const message = document.getElementById("footerThankYouMessage");
        message.style.display = "block";
        setTimeout(() => { message.style.display = "none"; }, 5000);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    let currentIndex = 0;
    const slides = document.querySelectorAll(".header .slideshow img");

    function changeSlide() {
        slides[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % slides.length;
        slides[currentIndex].classList.add("active");
    }

    setInterval(changeSlide, 5000);
});


document.addEventListener("DOMContentLoaded", function () {
    let testimonialIndex = 0;
    const slides = document.querySelectorAll(".testimonial-slide");
    const totalSlides = slides.length;

    function nextTestimonial() {
        testimonialIndex = (testimonialIndex + 1) % totalSlides;
        document.querySelector(".testimonial-slider").style.transform =
            `translateX(-${testimonialIndex * 100}%)`;
    }

    setInterval(nextTestimonial, 5000);
});
