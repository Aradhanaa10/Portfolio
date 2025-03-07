// script.js
// Add event listener to navigation links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Add event listener to contact form submit button
document.getElementById('contact-form').addEventListener('submit', event => {
    event.preventDefault();
    // Add your contact form submission logic here
    console.log('Form submitted!');
});