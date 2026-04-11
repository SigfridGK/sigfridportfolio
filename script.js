// Smooth scrolling for navigation links
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

// Add scroll animation for elements
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe project cards for animation
document.querySelectorAll('.project-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(card);
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
});

// Mobile menu toggle (for future enhancements)
const navMenu = document.querySelector('.nav-menu');
const navBrand = document.querySelector('.nav-brand');

// Add active link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const navLink = document.querySelector(`.nav-menu a[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            if (navLink) {
                document.querySelectorAll('.nav-menu a').forEach(link => link.style.color = '#636e72');
                navLink.style.color = '#667eea';
            }
        }
    });
});

// T011: Contact method click logging for analytics/debugging
const contactLinks = {
    '.contact-email': 'email',
    '.contact-phone': 'phone',
    '.contact-linkedin': 'linkedin'
};

Object.entries(contactLinks).forEach(([selector, method]) => {
    const link = document.querySelector(selector);
    if (link) {
        link.addEventListener('click', function() {
            console.log(`Contact method clicked: ${method}`, {
                timestamp: new Date().toISOString(),
                method: method,
                href: this.href,
                userAgent: navigator.userAgent
            });
            // Optional: Send to analytics service
            // if (window.gtag) {
            //     gtag('event', 'contact_method_clicked', { method: method });
            // }
        });
    }
});

console.log('Portfolio loaded successfully!');
