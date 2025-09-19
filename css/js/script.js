/* ================= Mobile Menu Toggle ================= */
const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle?.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

/* ================= Contact Form Submission ================= */
const form = document.getElementById('contact-form');

form?.addEventListener('submit', (e) => {
  e.preventDefault();
  
  // Basic form validation
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if(name === "" || email === "" || message === "") {
    alert("Please fill out all fields!");
    return;
  }

  // Demo submission (replace with backend integration if needed)
  alert(`Thank you ${name}! Your message has been sent.`);

  // Reset form
  form.reset();
});

/* ================= Scroll Animation for Cards ================= */
const cards = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('show'); // Add .show class for CSS animation
    }
  });
}, { threshold: 0.1 });

cards.forEach(card => {
  observer.observe(card);
});

/* ================= Smooth Scroll for Navigation Links ================= */
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    if(link.hash !== "") {
      e.preventDefault();
      const target = document.querySelector(link.hash);
      target?.scrollIntoView({ behavior: "smooth" });
    }
  });
});
