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

  // Calculador de talla (prototipo funcional, misma tabla que se muestra en "Medidas")
  var calcBtn = document.getElementById('calc-btn');
  if (calcBtn) {
    calcBtn.addEventListener('click', function () {
      var altura = parseFloat(document.getElementById('c-altura').value);
      var pecho = parseFloat(document.getElementById('c-pecho').value);
      var cintura = parseFloat(document.getElementById('c-cintura').value);
      var cadera = parseFloat(document.getElementById('c-cadera').value);
      var resultBox = document.getElementById('calc-result');

      if (!altura || !pecho || !cintura || !cadera) {
        resultBox.className = 'calc-result warn';
        resultBox.textContent = 'Completa los 4 campos (altura, pecho, cintura y cadera) para calcular tu talla.';
        return;
      }

      // Tabla de referencia (misma que la tabla visible arriba)
      var tabla = [
        { talla: 'S',    pechoMax: 91,  caderaMax: 97  },
        { talla: 'M',    pechoMax: 97,  caderaMax: 104 },
        { talla: 'L',    pechoMax: 105, caderaMax: 112 },
        { talla: 'XL',   pechoMax: 113, caderaMax: 121 },
        { talla: 'XXL',  pechoMax: 122, caderaMax: 130 },
        { talla: 'XXL+', pechoMax: Infinity, caderaMax: Infinity }
      ];

      var tallaFinal = 'XXL+';
      for (var i = 0; i < tabla.length; i++) {
        if (pecho <= tabla[i].pechoMax && cadera <= tabla[i].caderaMax) {
          tallaFinal = tabla[i].talla;
          break;
        }
      }

      // Stock simulado (mock) para que se sienta como un resultado real de inventario
      var stockSimulado = Math.floor(Math.random() * 5) + 2;

      resultBox.className = 'calc-result';
      resultBox.innerHTML = 'Tu talla recomendada: <span class="result-size">' + tallaFinal + '</span><br>' +
        stockSimulado + ' prendas en tu talla están disponibles ahora mismo en tienda.';
    });
  }

  // Simulador de entrega (prototipo funcional del flujo de probador)
  var deliveryBtn = document.getElementById('delivery-btn');
  if (deliveryBtn) {
    deliveryBtn.addEventListener('click', function () {
      var steps = document.querySelectorAll('#delivery-steps .d-step');
      var note = document.getElementById('delivery-note');
      var mensajes = [
        'Tu pedido fue confirmado y enviado al sistema de la tienda.',
        'El personal está preparando tu prenda en el almacén.',
        '¡Listo! Tu prenda te espera en el probador asignado.'
      ];

      deliveryBtn.disabled = true;
      deliveryBtn.textContent = 'Simulando…';
      steps.forEach(function (s) { s.classList.remove('done'); });
      note.textContent = '';

      steps.forEach(function (step, index) {
        setTimeout(function () {
          step.classList.add('done');
          note.textContent = mensajes[index];
          if (index === steps.length - 1) {
            deliveryBtn.disabled = false;
            deliveryBtn.textContent = 'Simular de nuevo';
          }
        }, (index + 1) * 900);
      });
    });
  }

});
