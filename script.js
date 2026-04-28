document.addEventListener('DOMContentLoaded', () => {
    const laptopImg = document.getElementById('laptopImg');
    const heroSection = document.querySelector('.hero-section');
    
    // Parallax & Tilt Effect for the Laptop Image
    heroSection.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;

        // Calculate offset from center (-1 to 1)
        const offsetX = (clientX - centerX) / centerX;
        const offsetY = (clientY - centerY) / centerY;

        // Apply transform (move opposite to mouse for parallax, tilt slightly)
        const moveX = offsetX * -30; // Max movement in pixels
        const moveY = offsetY * -30;
        const rotateY = offsetX * 5; // Max rotation in degrees
        const rotateX = offsetY * -5;

        laptopImg.style.transform = `
            scale(1.05)
            translate(${moveX}px, ${moveY}px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
        `;
    });

    // Reset transform on mouse leave
    heroSection.addEventListener('mouseleave', () => {
        laptopImg.style.transform = `scale(1.05) translate(0px, 0px) rotateX(0deg) rotateY(0deg)`;
        // Add transition for smooth reset
        laptopImg.style.transition = 'transform 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    // Remove transition when hovering for responsive tracking
    heroSection.addEventListener('mouseenter', () => {
        laptopImg.style.transition = 'transform 0.1s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
    });

    // Mobile Menu Toggle
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');
    const navLinkItems = document.querySelectorAll('.nav-link');

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('nav-active');
            menuToggle.classList.toggle('is-active');
        });
    }

    // Close menu when a link is clicked
    navLinkItems.forEach(item => {
        item.addEventListener('click', () => {
            if (navLinks.classList.contains('nav-active')) {
                navLinks.classList.remove('nav-active');
                menuToggle.classList.remove('is-active');
            }
        });
    });
});
