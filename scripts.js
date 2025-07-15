// Toggle dropdown menu visibility
function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

// Toggle between dark and light mode
function toggleTheme() {
  const body = document.body;
  if (body.classList.contains('light-mode')) {
    body.classList.remove('light-mode');
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
  }
}

// Show the contact form section when "Contact" button is clicked
function showContactForm() {
  const contactSection = document.getElementById('contact');
  contactSection.style.display = 'block';
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

// Handle all form submissions
document.addEventListener('DOMContentLoaded', () => {
  // Login form
  const loginForm = document.getElementById('loginForm');
  if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();
      window.location.href = 'main.html';
    });
  }

  // Register form
  const registerForm = document.getElementById('registerForm');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("Account created successfully!");
      window.location.href = 'main.html';
    });
  }

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      alert("We will contact you soon!");
      window.location.href = 'main.html';
    });
  }

  // Theme switch listener
  const themeSwitch = document.getElementById('themeSwitch');
  if (themeSwitch) {
    themeSwitch.addEventListener('change', toggleTheme);
  }
});
