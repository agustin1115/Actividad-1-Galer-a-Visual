var MINIMO_MENSAJE = 20;
var MAXIMO_MENSAJE = 1000;

var formularioContacto = document.getElementById('form-contacto');
var cajaErroresContacto = document.getElementById('errores-contacto');
var exitoContacto = document.getElementById('exito-contacto');

var validadoresContacto = {
  nombre: function () {
    var valor = formularioContacto.nombre.value.trim();
    if (!valor) return 'Escribí tu nombre.';
    if (valor.length < 2) return 'El nombre tiene que tener al menos 2 letras.';
    return '';
  },
  email: function () {
    var valor = formularioContacto.email.value.trim();
    if (!valor) return 'Escribí tu correo electrónico para que podamos responderte.';
    if (!esEmailValido(valor)) return 'El correo no parece válido: revisá que tenga @ y un dominio (por ejemplo: nombre@correo.com).';
    return '';
  },
  motivo: function () {
    return formularioContacto.motivo.value ? '' : 'Elegí el motivo de tu consulta.';
  },
  mensaje: function () {
    var largo = formularioContacto.mensaje.value.trim().length;
    if (!largo) return 'Escribí tu mensaje.';
    if (largo < MINIMO_MENSAJE) return 'Contanos un poco más: el mensaje tiene que tener al menos ' + MINIMO_MENSAJE + ' caracteres.';
    if (largo > MAXIMO_MENSAJE) return 'El mensaje no puede superar los ' + MAXIMO_MENSAJE + ' caracteres.';
    return '';
  }
};

function actualizarContador() {
  var largo = formularioContacto.mensaje.value.trim().length;
  var contador = document.getElementById('contador-mensaje');
  contador.textContent = largo + ' de ' + MAXIMO_MENSAJE + ' caracteres' + (largo < MINIMO_MENSAJE ? ' (mínimo ' + MINIMO_MENSAJE + ')' : '');
}

if (formularioContacto) {
  actualizarContador();
  activarValidacionEnVivo(formularioContacto, validadoresContacto);
  formularioContacto.mensaje.addEventListener('input', actualizarContador);

  formularioContacto.addEventListener('submit', function (evento) {
    evento.preventDefault();
    exitoContacto.classList.add('hidden');
    formularioContacto.dataset.intentado = 'true';
    var errores = validarCampos(validadoresContacto);
    mostrarResumenErrores(cajaErroresContacto, errores);
    if (errores.length) return;

    var motivo = formularioContacto.motivo.options[formularioContacto.motivo.selectedIndex].text;
    document.getElementById('exito-nombre').textContent = formularioContacto.nombre.value.trim();
    document.getElementById('exito-motivo').textContent = motivo;
    document.getElementById('exito-email').textContent = formularioContacto.email.value.trim();

    formularioContacto.reset();
    limpiarErrores(formularioContacto, validadoresContacto, cajaErroresContacto);
    actualizarContador();
    exitoContacto.classList.remove('hidden');
    exitoContacto.focus();
  });
}
