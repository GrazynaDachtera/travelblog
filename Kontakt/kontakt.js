function toggleMenu() {
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
}
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


window.onload = function () {
    // Load the EmailJS SDK script
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
    script.async = true;
    script.onload = function () {
        // Initialize EmailJS after the script has loaded
        var public_key = 'CnIsQ_v4kq7hjoLWW'
        emailjs.init(public_key);

        // Attach the event listener once EmailJS is ready
        var contactForm = document.getElementById('contact-form-for-email-kuzi')
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            // these IDs from the previous steps
            var service_id = 'service_orpvnm6'
            var template_id = 'template_quanneo'
            emailjs.sendForm(service_id, template_id, this)
                .then(function () {
                    console.log('SUCCESS!');
                    contactForm.reset();
                }, function (error) {
                    console.log('FAILED...', error);
                });
        });
    };

    // Append the EmailJS SDK script to the document
    document.head.appendChild(script);
};
