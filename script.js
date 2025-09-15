// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
  // Initialize AOS animation library
  AOS.init({
    duration: 1000,
    once: true,
    mirror: false
  });

  // Reference DOM elements
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.getElementById('navbar-toggle');
  const navbarLinks = document.getElementById('navbar-links');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollToTop = document.getElementById('scroll-to-top');
  const projectCards = document.querySelectorAll('.project-card');
  const modal = document.getElementById('project-modal');
  const modalClose = document.querySelector('.modal-close');
  const modalBody = document.querySelector('.modal-body');
  const skillLevels = document.querySelectorAll('.skill-level');
  const contactForm = document.querySelector('.contact-form');
  
  // Show/hide navbar background on scroll
  function toggleNavbarBackground() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
  
  // Show/hide scroll-to-top button
  function toggleScrollToTopButton() {
    if (window.scrollY > 500) {
      scrollToTop.classList.add('show');
    } else {
      scrollToTop.classList.remove('show');
    }
  }
  
  // Handle scroll events with throttling for better performance
  let scrollTimeout;
  window.addEventListener('scroll', function() {
    if (!scrollTimeout) {
      scrollTimeout = setTimeout(function() {
        toggleNavbarBackground();
        toggleScrollToTopButton();
        highlightActiveSection();
        animateSkillBars();
        
        scrollTimeout = null;
      }, 50); // 50ms throttle interval
    }
  });
  
  // Mobile menu toggle
  navbarToggle.addEventListener('click', function() {
    navbarToggle.classList.toggle('active');
    navbarLinks.classList.toggle('active');
  });
  
  // Close mobile menu when clicking a link
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      navbarToggle.classList.remove('active');
      navbarLinks.classList.remove('active');
    });
  });
  
  // Smooth scrolling for all nav links
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href');
      const targetSection = document.querySelector(targetId);
      
      if (targetSection) {
        window.scrollTo({
          top: targetSection.offsetTop - 60,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Cache section positions for better performance
  const sections = [];
  
  // Initialize section positions
  function cacheSectionPositions() {
    sections.length = 0; // Clear existing cache
    
    document.querySelectorAll('section').forEach(section => {
      sections.push({
        id: section.getAttribute('id'),
        top: section.offsetTop,
        height: section.offsetHeight
      });
    });
  }
  
  // Highlight active section in navigation
  function highlightActiveSection() {
    const scrollPosition = window.scrollY + 150;
    
    // Find the current section
    let currentSection = null;
    
    for (const section of sections) {
      if (
        scrollPosition >= section.top &&
        scrollPosition <= section.top + section.height
      ) {
        currentSection = section.id;
        break;
      }
    }
    
    // Update nav links only if needed
    if (currentSection) {
      navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === `#${currentSection}`) {
          if (!link.classList.contains('active')) {
            link.classList.add('active');
          }
        } else if (link.classList.contains('active')) {
          link.classList.remove('active');
        }
      });
    }
  }
  
  // Use Intersection Observer for skill bar animations
  const skillBarsObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const skillLevel = entry.target;
          const width = skillLevel.style.width;
          skillLevel.style.width = width;
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
  );
  
  // Register all skill bars with the observer
  function observeSkillBars() {
    skillLevels.forEach(skillLevel => {
      skillBarsObserver.observe(skillLevel);
    });
  }
  
  // Legacy fallback for browsers that don't support IntersectionObserver
  function animateSkillBars() {
    if ('IntersectionObserver' in window) {
      observeSkillBars();
      return;
    }
    
    // Fallback for older browsers
    skillLevels.forEach(skillLevel => {
      const sectionTop = skillLevel.parentElement.parentElement.parentElement.parentElement.offsetTop;
      const scrollPosition = window.scrollY + window.innerHeight;
      
      if (scrollPosition > sectionTop + 200) {
        const width = skillLevel.style.width;
        skillLevel.style.width = width;
      }
    });
  }
  
  // Handle project card clicks
  projectCards.forEach(card => {
    card.addEventListener('click', function() {
      const projectId = card.getAttribute('data-project');
      const template = document.getElementById(`project-${projectId}`);
      
      if (template) {
        modalBody.innerHTML = template.innerHTML;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
      }
    });
  });
  
  // Close modal when clicking the X button
  modalClose.addEventListener('click', function() {
    closeModal();
  });
  
  // Close modal when clicking outside of the modal content
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
  
  // Close modal with ESC key
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('show')) {
      closeModal();
    }
  });
  
  // Function to close the modal
  function closeModal() {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
    
    // Clear modal content after transition
    setTimeout(() => {
      modalBody.innerHTML = '';
    }, 300);
  }
  
  // Scroll to top functionality
  scrollToTop.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  
  // Contact form submission
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Validate inputs
      let isValid = true;
      
      if (!nameInput.value.trim()) {
        markInvalid(nameInput, 'Please enter your name');
        isValid = false;
      } else {
        markValid(nameInput);
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        markInvalid(emailInput, 'Please enter a valid email address');
        isValid = false;
      } else {
        markValid(emailInput);
      }
      
      if (!messageInput.value.trim()) {
        markInvalid(messageInput, 'Please enter your message');
        isValid = false;
      } else {
        markValid(messageInput);
      }
      
      // If valid, send the form (in this case, just show a success message)
      if (isValid) {
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';
        
        // Simulate sending (would be replaced with actual form submission)
        setTimeout(() => {
          submitBtn.textContent = 'Message Sent!';
          submitBtn.classList.add('success');
          
          // Reset form
          contactForm.reset();
          
          // Reset button after delay
          setTimeout(() => {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            submitBtn.classList.remove('success');
          }, 3000);
        }, 1500);
      }
    });
  }
  
  // Helper function to validate email
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  // Helper functions for form validation
  function markInvalid(input, message) {
    input.classList.add('invalid');
    
    // Create error message if it doesn't exist
    let errorMessage = input.nextElementSibling;
    if (!errorMessage || !errorMessage.classList.contains('error-message')) {
      errorMessage = document.createElement('div');
      errorMessage.className = 'error-message';
      input.parentNode.insertBefore(errorMessage, input.nextSibling);
    }
    
    errorMessage.textContent = message;
  }
  
  function markValid(input) {
    input.classList.remove('invalid');
    
    // Remove error message if exists
    const errorMessage = input.nextElementSibling;
    if (errorMessage && errorMessage.classList.contains('error-message')) {
      errorMessage.remove();
    }
  }
  
  // Cache section positions on load and resize
  cacheSectionPositions();
  window.addEventListener('resize', cacheSectionPositions);
  
  // Initialize
  toggleNavbarBackground();
  highlightActiveSection();
  
  // Ensure animations work on first load
  setTimeout(animateSkillBars, 500);
});