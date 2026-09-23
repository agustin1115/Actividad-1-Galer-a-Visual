// Techo para Argentina - menú móvil
// Despliega/oculta la navegación al tocar el botón "Menú" (solo visible en mobile por CSS).

document.querySelectorAll('.nav-toggle').forEach(function (boton) {
  boton.addEventListener('click', function () {
    var lista = document.getElementById(boton.getAttribute('aria-controls'));
    if (!lista) return;
    var abierta = lista.classList.toggle('nav-abierta');
    boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
  });
});
