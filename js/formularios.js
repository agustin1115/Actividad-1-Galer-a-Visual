function esEmailValido(valor) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(valor);
}

function marcarCampo(clave, mensaje) {
  var error = document.getElementById('error-' + clave);
  var campos = document.querySelectorAll('[data-campo="' + clave + '"]');

  campos.forEach(function (campo) {
    if (mensaje) {
      campo.setAttribute('aria-invalid', 'true');
    } else {
      campo.removeAttribute('aria-invalid');
    }
  });

  if (!error) return;
  error.textContent = '';
  if (mensaje) {
    var icono = document.createElement('span');
    icono.setAttribute('aria-hidden', 'true');
    icono.textContent = '⚠ ';
    error.appendChild(icono);
    error.appendChild(document.createTextNode(mensaje));
    error.classList.remove('hidden');
  } else {
    error.classList.add('hidden');
  }
}

function validarCampos(validadores) {
  var errores = [];
  Object.keys(validadores).forEach(function (clave) {
    var mensaje = validadores[clave]();
    marcarCampo(clave, mensaje);
    if (mensaje) errores.push({ clave: clave, mensaje: mensaje });
  });
  return errores;
}

function mostrarResumenErrores(caja, errores) {
  var lista = caja.querySelector('ul');
  lista.innerHTML = '';

  if (errores.length === 0) {
    caja.classList.add('hidden');
    return;
  }

  errores.forEach(function (error) {
    var campo = document.querySelector('[data-campo="' + error.clave + '"]');
    var item = document.createElement('li');
    var enlace = document.createElement('a');
    enlace.href = '#' + campo.id;
    enlace.className = 'underline underline-offset-2';
    enlace.textContent = error.mensaje;
    enlace.addEventListener('click', function (evento) {
      evento.preventDefault();
      campo.focus();
    });
    item.appendChild(enlace);
    lista.appendChild(item);
  });

  caja.classList.remove('hidden');
  caja.focus();
}

function activarValidacionEnVivo(formulario, validadores) {
  function validarUno(evento) {
    var clave = evento.target.dataset && evento.target.dataset.campo;
    if (!clave || !validadores[clave]) return;
    var yaMarcado = evento.target.getAttribute('aria-invalid') === 'true';
    var tieneValor = evento.target.type !== 'checkbox' && evento.target.type !== 'radio' && evento.target.value.trim() !== '';
    if (evento.type === 'focusout' && (formulario.dataset.intentado || tieneValor)) {
      marcarCampo(clave, validadores[clave]());
    } else if (evento.type !== 'focusout' && yaMarcado) {
      marcarCampo(clave, validadores[clave]());
    }
  }

  formulario.addEventListener('focusout', validarUno);
  formulario.addEventListener('input', validarUno);
  formulario.addEventListener('change', validarUno);
}

function limpiarErrores(formulario, validadores, caja) {
  Object.keys(validadores).forEach(function (clave) {
    marcarCampo(clave, '');
  });
  delete formulario.dataset.intentado;
  if (caja) caja.classList.add('hidden');
}
