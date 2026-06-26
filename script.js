(function () {
  var nav    = document.getElementById('site-nav');
  var toggle = nav.querySelector('.nav-toggle');
  var panel  = document.getElementById('nav-panel');
  var links  = panel.querySelectorAll('a');
  var isOpen = false;

  function openMenu() {
    isOpen = true;
    panel.classList.add('open');
    panel.removeAttribute('aria-hidden');
    toggle.setAttribute('aria-expanded', 'true');
    toggle.setAttribute('aria-label', 'Close navigation');
    links[0].focus();
  }

  function closeMenu() {
    isOpen = false;
    panel.classList.remove('open');
    panel.setAttribute('aria-hidden', 'true');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
  }

  toggle.addEventListener('click', function () {
    isOpen ? closeMenu() : openMenu();
  });

  links.forEach(function (link) {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isOpen) {
      closeMenu();
      toggle.focus();
    }
  });

  document.addEventListener('click', function (e) {
    if (isOpen && !nav.contains(e.target)) {
      closeMenu();
    }
  });
}());
