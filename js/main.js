document.querySelectorAll('.nav-toggle').forEach(function (boton) {
  var lista = document.getElementById(boton.getAttribute('aria-controls'));
  if (!lista) return;

  boton.addEventListener('click', function () {
    var abierta = boton.getAttribute('aria-expanded') === 'true';
    boton.setAttribute('aria-expanded', abierta ? 'false' : 'true');
    lista.classList.toggle('hidden', abierta);
    lista.classList.toggle('flex', !abierta);
  });

  document.addEventListener('keydown', function (evento) {
    if (evento.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      boton.click();
      boton.focus();
    }
  });
});
