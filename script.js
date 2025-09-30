// Smooth scrolling
document.querySelectorAll('a.nav-link').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

// Hero background image slider
const hero = document.querySelector('.hero');
const images = [
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80',
  'https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1400&q=80'
];
let index = 0;
setInterval(() => {
  index = (index + 1) % images.length;
  hero.style.backgroundImage = `url('${images[index]}')`;
}, 5000);

// Fade-in on scroll
const faders = document.querySelectorAll('.fade-in, .animate__animated');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add('appear');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.2 });
faders.forEach(el => observer.observe(el));
