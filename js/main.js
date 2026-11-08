
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());
  const button = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.main-nav');
  if (button && nav) {
    button.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      button.setAttribute('aria-expanded', String(open));
      button.textContent = open ? '×' : '☰';
    });
    nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      nav.classList.remove('is-open');
      button.setAttribute('aria-expanded', 'false');
      button.textContent = '☰';
    }));
  }
});
