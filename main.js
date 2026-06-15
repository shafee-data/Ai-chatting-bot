/* ════════════════════════════════════════════════════════════════
   BASIC JAVASCRIPT — Core Functionality
   MetaCH — Main Interactive Features
   ════════════════════════════════════════════════════════════════ */

'use strict';

/* ──────────────────────────────────────────────────────────────
   1. DOM MANIPULATION BASICS
   ────────────────────────────────────────────────────────────── */

// Get DOM elements
const nav = document.querySelector('.nav');
const mobileMenuToggle = document.getElementById('menuToggle');
const navMenu = document.querySelector('.nav-menu');

// Mobile Menu Toggle
if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when link is clicked
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });
}

/* ──────────────────────────────────────────────────────────────
   2. SCROLL BEHAVIOR
   ────────────────────────────────────────────────────────────── */

// Add scrolled class to nav
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav?.classList.add('scrolled');
    } else {
        nav?.classList.remove('scrolled');
    }
});

// Smooth scroll for anchor links
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

/* ──────────────────────────────────────────────────────────────
   3. INTERSECTION OBSERVER FOR LAZY REVEAL
   ────────────────────────────────────────────────────────────── */

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Element is visible
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all reveal elements
document.querySelectorAll('.reveal').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    observer.observe(el);
});

/* ──────────────────────────────────────────────────────────────
   4. STAT COUNTER ANIMATION
   ────────────────────────────────────────────────────────────── */

function animateCounter(element, target, duration = 2000) {
    let current = 0;
    const increment = target / (duration / 16); // ~60fps
    
    const timer = setInterval(() => {
        current += increment;
        
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Animate stats when visible
const statsSection = document.querySelector('.hero-stats');
if (statsSection) {
    const statsObserver = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
            const statValues = statsSection.querySelectorAll('.stat-value');
            
            statValues.forEach(stat => {
                const text = stat.textContent;
                const number = parseInt(text);
                
                if (!isNaN(number)) {
                    animateCounter(stat, number, 1500);
                }
            });
            
            statsObserver.unobserve(statsSection);
        }
    }, { threshold: 0.5 });
    
    statsObserver.observe(statsSection);
}

/* ──────────────────────────────────────────────────────────────
   5. FORM VALIDATION (Basic)
   ────────────────────────────────────────────────────────────── */

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validateForm(form) {
    const inputs = form.querySelectorAll('input[required], textarea[required]');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.style.borderColor = 'var(--error)';
            isValid = false;
        } else {
            input.style.borderColor = '';
        }
    });
    
    return isValid;
}

/* ──────────────────────────────────────────────────────────────
   6. LOCAL STORAGE MANAGEMENT
   ────────────────────────────────────────────────────────────── */

const Storage = {
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    },
    
    get: (key, defaultValue = null) => {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage error:', error);
            return defaultValue;
        }
    },
    
    remove: (key) => {
        try {
            localStorage.removeItem(key);
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    },
    
    clear: () => {
        try {
            localStorage.clear();
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }
};

/* ──────────────────────────────────────────────────────────────
   7. THEME MANAGEMENT
   ────────────────────────────────────────────────────────────── */

const ThemeManager = {
    DARK_MODE_KEY: 'metach_dark_mode',
    
    init: function() {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const savedDarkMode = Storage.get(this.DARK_MODE_KEY, prefersDark);
        
        if (savedDarkMode) {
            this.enableDarkMode();
        } else {
            this.enableLightMode();
        }
        
        // Listen for system theme changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (e.matches) {
                this.enableDarkMode();
            } else {
                this.enableLightMode();
            }
        });
    },
    
    enableDarkMode: function() {
        document.documentElement.style.colorScheme = 'dark';
        Storage.set(this.DARK_MODE_KEY, true);
    },
    
    enableLightMode: function() {
        document.documentElement.style.colorScheme = 'light';
        Storage.set(this.DARK_MODE_KEY, false);
    },
    
    toggle: function() {
        const isDark = Storage.get(this.DARK_MODE_KEY, true);
        if (isDark) {
            this.enableLightMode();
        } else {
            this.enableDarkMode();
        }
    }
};

/* ──────────────────────────────────────────────────────────────
   8. EVENT DELEGATION PATTERN
   ────────────────────────────────────────────────────────────── */

// Event delegation for dynamic content
document.addEventListener('click', (e) => {
    // Handle buttons with data-action attribute
    if (e.target.hasAttribute('data-action')) {
        const action = e.target.getAttribute('data-action');
        console.log('Action:', action);
    }
});

/* ──────────────────────────────────────────────────────────────
   9. UTILITY FUNCTIONS
   ────────────────────────────────────────────────────────────── */

// Debounce function
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get random element from array
function getRandomElement(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Format date
function formatDate(date) {
    return new Intl.DateTimeFormat('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    }).format(date);
}

/* ──────────────────────────────────────────────────────────────
   10. PERFORMANCE MONITORING
   ────────────────────────────────────────────────────────────── */

const PerformanceMonitor = {
    startTime: performance.now(),
    
    logMetric: function(name) {
        const duration = performance.now() - this.startTime;
        console.log(`${name}: ${duration.toFixed(2)}ms`);
    },
    
    getLoadTime: function() {
        if (window.performance && window.performance.timing) {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            return pageLoadTime;
        }
        return null;
    }
};

/* ──────────────────────────────────────────────────────────────
   11. INITIALIZATION
   ────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {
    console.log('🚀 MetaCH initialized');
    
    // Initialize theme manager
    ThemeManager.init();
    
    // Log page load time
    window.addEventListener('load', () => {
        const loadTime = PerformanceMonitor.getLoadTime();
        if (loadTime) {
            console.log(`📊 Page Load Time: ${loadTime}ms`);
        }
    });
});

/* ──────────────────────────────────────────────────────────────
   12. ERROR HANDLING
   ────────────────────────────────────────────────────────────── */

window.addEventListener('error', (event) => {
    console.error('Global error:', event.error);
});

window.addEventListener('unhandledrejection', (event) => {
    console.error('Unhandled promise rejection:', event.reason);
});

/* ──────────────────────────────────────────────────────────────
   13. CONSOLE GREETING
   ────────────────────────────────────────────────────────────── */

console.log(`
%c╔═══════════════════════════════╗
%c║     Welcome to MetaCH         ║
%c║  Created by Kabi lash         ║
%c║  Powered by Claude AI         ║
%c╚═══════════════════════════════╝

%c📚 Learning Resources:
%c   • Basic: HTML/CSS/JavaScript fundamentals
%c   • Intermediate: API integration & DOM manipulation
%c   • Advanced: Performance optimization & animations

%c🚀 Explore the source code to learn!
`,
'color: #00d4ff; font-weight: bold; font-size: 14px;',
'color: #00d4ff; font-weight: bold; font-size: 14px;',
'color: #f0c040; font-size: 12px;',
'color: #f0c040; font-size: 12px;',
'color: #00d4ff; font-weight: bold; font-size: 14px;',
'color: #00d4ff; font-size: 12px;',
'color: #a8b8d8; font-size: 11px;',
'color: #a8b8d8; font-size: 11px;',
'color: #a8b8d8; font-size: 11px;',
'color: #00ff88; font-weight: bold; font-size: 12px;'
);
