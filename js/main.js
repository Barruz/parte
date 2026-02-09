function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


const menu = document.querySelector(".header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        menu.classList.add("scrolled");
    } else {
        menu.classList.remove("scrolled");
    }
});


function showTestimonial(index) {
    const testimonials = document.querySelectorAll('.testimonial__box');
    testimonials.forEach((el, i) => {
        el.classList.toggle('active', i === index);
    });
}

window.addEventListener('scroll', () => { document.querySelectorAll('.fade-in').forEach(el => { const rect = el.getBoundingClientRect(); if (rect.top < window.innerHeight - 100) { el.classList.add('visible'); } }); });

document.addEventListener("DOMContentLoaded", () => {
    const navToggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".nav");
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".nav a");

    document.addEventListener("click", (event) => {
        const isClickInsideMenu = nav.contains(event.target);
        const isClickInsideHeader = header.contains(event.target);

        if (!isClickInsideMenu && !isClickInsideHeader && navToggle.checked) {
            navToggle.checked = false;
        }
    });

    navLinks.forEach(link => {
        link.addEventListener("click", () => {
            navToggle.checked = false;
        });
    });
});

function handleFadeIn() {
    document.querySelectorAll('.fade-in').forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            el.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', handleFadeIn);
window.addEventListener('load', handleFadeIn); // ✅ Trigger on page load

/* SLIDER */

function createSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    const images = slider.querySelectorAll('.project__image');
    const nav = slider.querySelector('.project__nav');
    const leftArrow = slider.querySelector('.slider-arrow.left');
    const rightArrow = slider.querySelector('.slider-arrow.right');
    let currentIndex = 0;

    images.forEach((_, i) => {
        const dot = document.createElement('span');
        dot.className = 'dot' + (i === 0 ? ' active' : '');
        dot.addEventListener('click', () => goToSlide(i));
        nav.appendChild(dot);
    });

    const dots = nav.querySelectorAll('.dot');

    function goToSlide(index) {
        images[currentIndex].classList.remove('active');
        dots[currentIndex].classList.remove('active');
        currentIndex = index;
        images[currentIndex].classList.add('active');
        dots[currentIndex].classList.add('active');
    }

    function nextSlide() {
        goToSlide((currentIndex + 1) % images.length);
    }

    function prevSlide() {
        goToSlide((currentIndex - 1 + images.length) % images.length);
    }

    leftArrow.addEventListener('click', prevSlide);
    rightArrow.addEventListener('click', nextSlide);
}

createSlider('slider1');
createSlider('slider2');
createSlider('slider3');
createSlider('slider4');
createSlider('slider5');
createSlider('slider6');
createSlider('slider7');
createSlider('slider8');
createSlider('slider9');

