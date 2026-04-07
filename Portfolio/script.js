document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const menuIcon = document.querySelector('.menu-btn i');
    const navItems = document.querySelectorAll('.nav-links a');

    // Toggle menu
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Change icon
        if (navLinks.classList.contains('active')) {
            menuIcon.classList.remove('ri-menu-3-line');
            menuIcon.classList.add('ri-close-line');
        } else {
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-3-line');
        }
    });

    // Close menu when clicking a link
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuIcon.classList.remove('ri-close-line');
            menuIcon.classList.add('ri-menu-3-line');
        });
    });
});
