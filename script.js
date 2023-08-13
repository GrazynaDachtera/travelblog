// script.js
window.addEventListener("scroll", () => {
    const headline = document.querySelector(".headline");
    const scrollTop = window.scrollY;
    const maxScroll = 100; // Adjust this value as needed

    // Calculate the opacity based on scroll position
    const opacity = 1 - (scrollTop / maxScroll);

    // Apply the opacity to the menu
    headline.style.opacity = opacity < 0 ? 0 : opacity;
});
