// Fade in elements on load
document.addEventListener('DOMContentLoaded', () => {
    console.log("Website Loaded Successfully");
});

// Simple Contact Form Handler
const contactForm = document.getElementById('contactForm');
if(contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Interactive hover effect for cards
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.borderColor = 'var(--primary)';
    });
});