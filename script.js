const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.desktop-nav');

menuToggle?.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
});

document.querySelectorAll('.desktop-nav a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle?.setAttribute('aria-expanded', 'false');
  });
});

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const filters = document.querySelectorAll('.filter');
const projects = document.querySelectorAll('.project');
const count = document.querySelector('.work-count');
const totalProjects = projects.length;

filters.forEach((filter) => {
  filter.addEventListener('click', () => {
    filters.forEach((item) => item.classList.remove('active'));
    filter.classList.add('active');
    const category = filter.dataset.filter;
    let visibleProjects = 0;
    projects.forEach((project) => {
      const visible = category === 'all' || project.dataset.category === category;
      project.hidden = !visible;
      if (visible) visibleProjects += 1;
    });
    if (count) count.textContent = `${String(visibleProjects).padStart(2, '0')} / ${String(totalProjects).padStart(2, '0')} projects`;
  });
});

const form = document.querySelector('.enquiry-form');
const formStatus = document.querySelector('.form-status');

form?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const name = data.get('name');
  if (formStatus) {
    formStatus.textContent = `Thanks, ${name}. We’ll be in touch shortly.`;
  }
  form.reset();
});
