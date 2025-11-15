// Raphael Castellano Portfolio - Main JavaScript
// Advanced interactions and animations

class PortfolioApp {
    constructor() {
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.initAnimations();
        this.setupInteractions();
        this.initializeComponents();
    }

    setupEventListeners() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initScrollAnimations();
            this.initTypewriter();
            this.setupNavigation();
        });

        window.addEventListener('scroll', () => {
            this.handleScroll();
        });

        window.addEventListener('resize', () => {
            this.handleResize();
        });
    }

    initAnimations() {
        // Initialize Anime.js animations
        if (typeof anime !== 'undefined') {
            this.setupAnimeAnimations();
        }

        // Initialize Splitting.js for text effects
        if (typeof Splitting !== 'undefined') {
            Splitting();
        }
    }

    setupAnimeAnimations() {
        // Hero section animation
        anime({
            targets: '.hero-title .char',
            translateY: [100, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1400,
            delay: (el, i) => 30 * i
        });

        // Project cards entrance animation
        anime({
            targets: '.project-card',
            translateY: [50, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 1200,
            delay: (el, i) => 100 * i
        });
    }

    initTypewriter() {
        if (typeof Typed !== 'undefined') {
            new Typed('#typewriter-text', {
                strings: [
                    'AI Trainer & Prompt Engineer',
                    'Data Specialist & Business Strategist',
                    'Creative Designer & Developer',
                    '20+ Years of Innovation'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                loop: true,
                showCursor: true,
                cursorChar: '|'
            });
        }
    }

    setupInteractions() {
        this.setupProjectFilters();
        this.setupSkillAnimations();
        this.setupContactForm();
        this.setupHoverEffects();
    }

    setupProjectFilters() {
        const filterButtons = document.querySelectorAll('.filter-btn');
        const projectCards = document.querySelectorAll('.project-card');

        filterButtons.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const filter = e.target.dataset.filter;
                
                // Update active button
                filterButtons.forEach(b => b.classList.remove('active'));
                e.target.classList.add('active');

                // Filter projects
                projectCards.forEach(card => {
                    if (filter === 'all' || card.dataset.category === filter) {
                        card.style.display = 'block';
                        anime({
                            targets: card,
                            scale: [0.8, 1],
                            opacity: [0, 1],
                            duration: 600,
                            easing: 'easeOutExpo'
                        });
                    } else {
                        anime({
                            targets: card,
                            scale: [1, 0.8],
                            opacity: [1, 0],
                            duration: 300,
                            easing: 'easeInExpo',
                            complete: () => {
                                card.style.display = 'none';
                            }
                        });
                    }
                });
            });
        });
    }

    setupSkillAnimations() {
        const skillBars = document.querySelectorAll('.skill-bar');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    const percentage = bar.dataset.percentage;
                    
                    anime({
                        targets: bar.querySelector('.skill-fill'),
                        width: percentage + '%',
                        duration: 1500,
                        easing: 'easeOutExpo'
                    });
                }
            });
        });

        skillBars.forEach(bar => observer.observe(bar));
    }

    setupContactForm() {
        const form = document.querySelector('#contact-form');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleFormSubmission(form);
            });
        }
    }

    handleFormSubmission(form) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        // Simulate form submission
        setTimeout(() => {
            this.showNotification('Message sent successfully!', 'success');
            form.reset();
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
        }, 2000);
    }

    setupHoverEffects() {
        // 3D tilt effect for project cards
        const cards = document.querySelectorAll('.project-card');
        
        cards.forEach(card => {
            card.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.target,
                    rotateX: -5,
                    rotateY: 5,
                    scale: 1.05,
                    duration: 300,
                    easing: 'easeOutExpo'
                });
            });

            card.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.target,
                    rotateX: 0,
                    rotateY: 0,
                    scale: 1,
                    duration: 300,
                    easing: 'easeOutExpo'
                });
            });
        });

        // Button hover effects
        const buttons = document.querySelectorAll('.btn-primary');
        
        buttons.forEach(btn => {
            btn.addEventListener('mouseenter', (e) => {
                anime({
                    targets: e.target,
                    scale: 1.05,
                    duration: 200,
                    easing: 'easeOutExpo'
                });
            });

            btn.addEventListener('mouseleave', (e) => {
                anime({
                    targets: e.target,
                    scale: 1,
                    duration: 200,
                    easing: 'easeOutExpo'
                });
            });
        });
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('animate-in');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    setupNavigation() {
        const navLinks = document.querySelectorAll('.nav-link');
        
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const href = link.getAttribute('href');
                
                if (href.startsWith('#')) {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({
                            behavior: 'smooth',
                            block: 'start'
                        });
                    }
                }
            });
        });

        // Mobile menu toggle
        const mobileToggle = document.querySelector('.mobile-toggle');
        const navMenu = document.querySelector('.nav-menu');
        
        if (mobileToggle && navMenu) {
            mobileToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }
    }

    initializeComponents() {
        this.initParticleBackground();
        this.initSkillChart();
        this.initProjectCarousel();
    }

    initParticleBackground() {
        const canvas = document.querySelector('#particle-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particles = [];
        const particleCount = 50;

        class Particle {
            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.vx = (Math.random() - 0.5) * 0.5;
                this.vy = (Math.random() - 0.5) * 0.5;
                this.radius = Math.random() * 2 + 1;
                this.opacity = Math.random() * 0.5 + 0.2;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
                if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(74, 155, 142, ${this.opacity})`;
                ctx.fill();
            }
        }

        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            particles.forEach(particle => {
                particle.update();
                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        animate();
    }

    initSkillChart() {
        const chartContainer = document.querySelector('#skill-chart');
        if (!chartContainer || typeof echarts === 'undefined') return;

        const chart = echarts.init(chartContainer);
        
        const option = {
            tooltip: {},
            radar: {
                indicator: [
                    { name: 'AI/ML', max: 100 },
                    { name: 'Prompt Engineering', max: 100 },
                    { name: 'Data Analysis', max: 100 },
                    { name: 'Business Strategy', max: 100 },
                    { name: 'Design', max: 100 },
                    { name: 'Development', max: 100 }
                ],
                radius: '60%'
            },
            series: [{
                name: 'Skills',
                type: 'radar',
                data: [{
                    value: [85, 90, 80, 95, 75, 70],
                    name: 'Current Level',
                    areaStyle: {
                        color: 'rgba(74, 155, 142, 0.3)'
                    },
                    lineStyle: {
                        color: '#4a9b8e'
                    }
                }]
            }]
        };

        chart.setOption(option);
    }

    initProjectCarousel() {
        const carousel = document.querySelector('.project-carousel');
        if (!carousel || typeof Splide === 'undefined') return;

        new Splide(carousel, {
            type: 'loop',
            perPage: 3,
            perMove: 1,
            gap: '2rem',
            autoplay: true,
            interval: 4000,
            breakpoints: {
                768: {
                    perPage: 1
                }
            }
        }).mount();
    }

    handleScroll() {
        const scrollY = window.scrollY;
        const navbar = document.querySelector('.navbar');
        
        if (navbar) {
            if (scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
    }

    handleResize() {
        const canvas = document.querySelector('#particle-canvas');
        if (canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        }
    }

    showNotification(message, type = 'info') {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        anime({
            targets: notification,
            translateY: [-100, 0],
            opacity: [0, 1],
            duration: 300,
            easing: 'easeOutExpo'
        });

        setTimeout(() => {
            anime({
                targets: notification,
                translateY: [0, -100],
                opacity: [1, 0],
                duration: 300,
                easing: 'easeInExpo',
                complete: () => {
                    notification.remove();
                }
            });
        }, 3000);
    }
}

// Initialize the application
const portfolioApp = new PortfolioApp();