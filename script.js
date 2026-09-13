const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

const glow = document.querySelector('.cursor-glow');
window.addEventListener('mousemove', e => {
  glow.style.left = e.clientX + 'px';
  glow.style.top = e.clientY + 'px';
});

document.getElementById('year').textContent = new Date().getFullYear();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.animate(
        [{opacity:0, transform:'translateY(18px)'}, {opacity:1, transform:'translateY(0)'}],
        {duration:650, easing:'cubic-bezier(.2,.8,.2,1)', fill:'forwards'}
      );
      observer.unobserve(entry.target);
    }
  });
}, {threshold:.12});

document.querySelectorAll('.skill-card, .project-card, .timeline-item, .workflow-box').forEach(el => {
  el.style.opacity = '0';
  observer.observe(el);
});
