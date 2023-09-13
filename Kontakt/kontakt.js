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

<script src="https://cdn.jsdelivr.net/npm/emailjs-com@2/dist/email.min.js"></script>
<script>
    document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("CnIsQ_v4kq7hjoLWW");

    document.getElementById('form-section-1').addEventListener('submit', function(event) {
    event.preventDefault();

    // Your service ID
    var serviceID = 'service_orpvnm6';

    // Your template ID
    var templateID = 'template_eeviy0j';

    var emailParams = {
    to_email: document.getElementById('email').value,
    message: document.getElementById('message').value,
};

    emailjs.send(serviceID, templateID, emailParams)
    .then(function(response) {
    console.log('Email successfully sent!', response);
})
    .catch(function(error) {
    console.error('Error occurred:', error);
});
});
});
</script>



