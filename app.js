// Ali Beydoun Professional Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', function() {
            navLinks.classList.toggle('open');
        });

        // Close mobile nav when clicking a link
        navLinks.querySelectorAll('a').forEach(function(link) {
            link.addEventListener('click', function() {
                navLinks.classList.remove('open');
            });
        });

        // Close mobile nav when clicking outside
        document.addEventListener('click', function(e) {
            if (!navToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('open');
            }
        });
    }

    // Add scrolled class to nav on scroll
    const nav = document.querySelector('.nav');
    if (nav) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        });
    }

    // Set active nav link based on current page
    const currentPath = window.location.pathname;
    document.querySelectorAll('.nav-links a').forEach(function(link) {
        const href = link.getAttribute('href');
        if (currentPath.endsWith(href) ||
            (currentPath.endsWith('/') && href === 'index.html') ||
            (currentPath.includes('/blog') && href === 'blog/')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
});
