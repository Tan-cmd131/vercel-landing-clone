// Scroll Animation
document.addEventListener('DOMContentLoaded', () => {
  // Select all sections and cards that should animate
  const animateElements = document.querySelectorAll(
    'section, .feature-card, .price-card, .footer-column'
  );

  // Create Intersection Observer
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Add animation class when element enters viewport
        entry.target.classList.add('animate-in');
        // Stop observing this element (animation done once)
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1, // Trigger when 10% of element is visible
    rootMargin: '0px 0px -50px 0px' // Start animation slightly before fully visible
  });

  // Observe all elements
  animateElements.forEach((element) => {
    observer.observe(element);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button interactions
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', function() {
    // Add click animation
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
    
    // Log button text (for demo purposes)
    console.log('Clicked:', this.textContent);
  });
});
