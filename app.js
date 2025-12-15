// Ali Beydoun Professional Website - Main JavaScript

// Blog Posts Data - Update this array when adding new posts
const blogPosts = [
    {
        title: 'Using AI to Tame Your Salesforce Flows',
        slug: 'claude-code-salesforce-flows',
        category: 'Salesforce Development',
        date: 'December 2025',
        excerpt: 'Flows multiply fast in enterprise orgs. Here\'s how AI tools like Claude Code can help you navigate, debug, and manage complex automations.',
        readTime: '3 min read',
        featured: true
    },
    {
        title: 'Welcome to the Blog',
        slug: 'welcome',
        category: 'General',
        date: 'December 2025',
        excerpt: 'After years of thinking about it, I\'ve finally set up a space to share some of what I\'ve learned.',
        readTime: '2 min read',
        featured: false
    }
];

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

    // Blog Feed - Render posts on homepage
    renderBlogFeed();
});

// Blog Feed Rendering
function renderBlogFeed() {
    const feedContainer = document.getElementById('blog-feed');
    if (!feedContainer) return;

    // Get the latest posts (up to 2)
    const postsToShow = blogPosts.slice(0, 2);

    if (postsToShow.length === 0) {
        feedContainer.innerHTML = '<div class="blog-feed-empty">No posts yet. Check back soon!</div>';
        return;
    }

    // Determine base path based on current location
    const isHomepage = window.location.pathname.endsWith('/') ||
                       window.location.pathname.endsWith('index.html') ||
                       window.location.pathname === '';
    const basePath = isHomepage ? 'blog/posts/' : '';

    feedContainer.innerHTML = postsToShow.map(function(post) {
        const featuredClass = post.featured ? ' blog-feed-featured' : '';
        const featuredBadge = post.featured ? '<span class="badge-featured">Latest</span>' : '';

        return `
            <article class="blog-feed-card${featuredClass}">
                <div class="blog-feed-meta">
                    ${featuredBadge}
                    <span class="blog-feed-category">${post.category}</span>
                    <span class="blog-feed-date">${post.date}</span>
                </div>
                <h3><a href="${basePath}${post.slug}.html">${post.title}</a></h3>
                <p class="blog-feed-excerpt">${post.excerpt}</p>
                <div class="blog-feed-footer">
                    <span class="blog-feed-time">${post.readTime}</span>
                    <a href="${basePath}${post.slug}.html" class="blog-feed-link">
                        Read
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </a>
                </div>
            </article>
        `;
    }).join('');
}
