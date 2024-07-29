// script.js

// Toggle navigation menu for mobile view
document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('nav');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            navMenu.classList.toggle('nav-open');
        });
    }

    // Handle "Add to Cart" and "Remove" button clicks
    const addToCartButtons = document.querySelectorAll('.product button');
    const removeButtons = document.querySelectorAll('.cart-item button');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to Cart!');
        });
    });

    removeButtons.forEach(button => {
        button.addEventListener('click', () => {
            button.parentElement.remove();
            alert('Item removed from cart!');
        });
    });
});