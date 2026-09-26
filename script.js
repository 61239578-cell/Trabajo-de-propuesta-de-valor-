document.addEventListener('DOMContentLoaded', function () {

  // Menú móvil
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
    });
  }

  // Nav sólida al hacer scroll
  var nav = document.querySelector('.site-nav');
  function onScroll() {
    if (!nav) return;
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  }
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Navegador de pasos interactivo (página "Cómo funciona")
  var stepBtns = document.querySelectorAll('.step-btn');
  stepBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      var step = btn.getAttribute('data-step');
      document.querySelectorAll('.step-btn').forEach(function (b) { b.classList.remove('active'); });
      document.querySelectorAll('.step-detail').forEach(function (d) { d.classList.remove('active'); });
      btn.classList.add('active');
      var target = document.querySelector('.step-detail[data-step="' + step + '"]');
      if (target) target.classList.add('active');
    });
  });

});
