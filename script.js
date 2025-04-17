// Handle form submission
function handleFormSubmission() {
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for your message!');
    });

    form.addEventListener('focusin', (event) => {
        event.target.classList.add('focused');
    });

    form.addEventListener('focusout', (event) => {
        event.target.classList.remove('focused');
    });
}

// Style testimonials and add hover effects
function styleTestimonials() {
    const testimonials = document.querySelectorAll('.testimonial');
    testimonials.forEach(testimonial => {
        testimonial.classList.add('testimonial');
        testimonial.addEventListener('mouseover', () => {
            testimonial.style.backgroundColor = 'lightblue';
            testimonial.style.color = 'black';
        });
        testimonial.addEventListener('mouseout', () => {
            testimonial.style.backgroundColor = '';
            testimonial.style.color = '';
        });
    });
}

// Toggle FAQ answers
function setupFAQToggle() {
    document.querySelectorAll('.faq-question').forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.nextElementSibling;
            answer.classList.toggle('faq-answer');
        });
    });
}

// Add container styling dynamically
function styleContainers() {
    const containers = document.querySelectorAll('.services-container, .testimonials-container, .contact-form-container');
    containers.forEach(container => {
        container.classList.add('container');
    });
}

// Initialize all functionality
function initialize() {
    handleFormSubmission();
    styleTestimonials();
    setupFAQToggle();
    styleContainers(); // Apply container styles
}

// Run the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initialize);