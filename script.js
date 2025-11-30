// Contact form submission handling
$(document).ready(function() {
    // Handle contact form submission
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        const name = $('#name').val();
        alert(`Thank you ${name} for your message!`);
        $('#contactForm')[0].reset();
    });
});

// Mobile menu toggle functionality
function initMobileMenu() {
    const mobileToggle = document.createElement('div');
    mobileToggle.className = 'mobile-toggle';
    mobileToggle.innerHTML = '☰';
    
    const navContainer = document.querySelector('.nav-container');
    if (navContainer) {
        navContainer.appendChild(mobileToggle);
        
        mobileToggle.addEventListener('click', function() {
            const navMenu = document.querySelector('.nav-menu');
            navMenu.classList.toggle('active');
        });
    }
}

// Initialize mobile menu on load
document.addEventListener('DOMContentLoaded', initMobileMenu);

// Add scroll to top button
document.addEventListener('DOMContentLoaded', function() {
    const scrollToTopButton = document.createElement('button');
    scrollToTopButton.innerHTML = '↑';
    scrollToTopButton.className = 'scroll-to-top';
    scrollToTopButton.setAttribute('aria-label', 'Scroll to top');
    
    document.body.appendChild(scrollToTopButton);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollToTopButton.classList.add('visible');
        } else {
            scrollToTopButton.classList.remove('visible');
        }
    });
    
    scrollToTopButton.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});