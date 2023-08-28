// script.js
window.addEventListener("scroll", () => {
    const headline = document.querySelector(".headline");
    const scrollTop = window.scrollY;
    const maxScroll = 100;

    const opacity = 1 - (scrollTop / maxScroll);

    headline.style.opacity = opacity < 0 ? 0 : opacity;
});

const ofertaMenuItem = document.querySelector('.menu .dropdown > a'); // Target the anchor tag

const submenu = ofertaMenuItem.nextElementSibling; // Use nextElementSibling to target the ul element

ofertaMenuItem.addEventListener('click', function(event) {
    event.preventDefault();
    submenu.style.display = (submenu.style.display === 'block') ? 'none' : 'block';
});


