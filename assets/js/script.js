// Mobile nav toggle & year fill
(function(){
  const toggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.site-nav');
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.style.display === 'block';
      nav.style.display = open ? 'none' : 'block';
      toggle.setAttribute('aria-expanded', String(!open));
    });
    // Close nav when resizing up
    window.addEventListener('resize', () => {
      if (window.innerWidth > 720) { nav.style.display = ''; }
    });
  }
})();
