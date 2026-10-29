// Get the hamburger menu toggle button and the menu
const menuToggle = document.getElementById('menuToggle');
const menu = document.getElementById('menu');

// Toggle the menu when clicking on the hamburger button
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show'); // Add or remove the "show" class
});

// Close the menu when clicking outside of it
document.addEventListener('click', (e) => {
    // Check if the clicked element is not part of the menu or toggle button
    if (!menu.contains(e.target) && !menuToggle.contains(e.target)) {
        menu.classList.remove('show'); // Remove the "show" class to hide the menu
    }
});

// Create an Intersection Observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        // Add 'visible' class when element comes into view
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

// Observe all elements with fade-in class
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.fade-in').forEach((element) => {
        observer.observe(element);
    });
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
