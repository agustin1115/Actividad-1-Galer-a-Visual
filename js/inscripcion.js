var TIPO_DE_CAMBIO = {
  valor: 1520,
  fuente: 'Banco de la Nación Argentina, dólar oficial, valor de venta',
  fecha: '05/08/2026'
};

var MAXIMO_PERSONAS = 10;
var DIAS_DE_ANTICIPACION = 180;

var formatoPesos = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
var formatoDolares = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 });
var formatoFecha = new Intl.DateTimeFormat('es-AR', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });

var formulario = document.getElementById('form-inscripcion');
var cajaErrores = document.getElementById('errores-inscripcion');
var pasoFormulario = document.getElementById('paso-formulario');
var pasoResumen = document.getElementById('paso-resumen');
var pasoConfirmacion = document.getElementById('paso-confirmacion');

function hoySinHora() {
  var hoy = new Date();
  hoy.setHours(0, 0, 0, 0);
  return hoy;
}

function aTextoISO(fecha) {
  var mes = String(fecha.getMonth() + 1).padStart(2, '0');
  var dia = String(fecha.getDate()).padStart(2, '0');
  return fecha.getFullYear() + '-' + mes + '-' + dia;
}

function leerFecha(valor) {
  var partes = valor.split('-').map(Number);
  if (partes.length !== 3 || partes.some(isNaN)) return null;
  return new Date(partes[0], partes[1] - 1, partes[2]);
}

function fechaMaxima() {
  var maxima = hoySinHora();
  maxima.setDate(maxima.getDate() + DIAS_DE_ANTICIPACION);
  return maxima;
}

function jornadaElegida() {
  return formulario.querySelector('input[name="jornada"]:checked');
}

function adicionalesElegidos() {
  return Array.from(formulario.querySelectorAll('input[name="adicional"]:checked'));
}

function monedaElegida() {
  return formulario.querySelector('input[name="moneda"]:checked').value;
}

function cantidadPersonas() {
  var valor = formulario.cantidad.value.trim();
  if (!/^\d+$/.test(valor)) return 0;
  var cantidad = Number(valor);
  return cantidad >= 1 && cantidad <= MAXIMO_PERSONAS ? cantidad : 0;
}

function calcularImporte() {
  var jornada = jornadaElegida();
  var precioJornada = jornada ? Number(jornada.dataset.precio) : 0;
  var precioAdicionales = adicionalesElegidos().reduce(function (suma, adicional) {
    return suma + Number(adicional.dataset.precio);
  }, 0);
  var personas = cantidadPersonas();
  var porPersona = precioJornada + precioAdicionales;
  var totalPesos = porPersona * personas;

  return {
    jornada: jornada,
    precioJornada: precioJornada,
    precioAdicionales: precioAdicionales,
    porPersona: porPersona,
    personas: personas,
    totalPesos: totalPesos,
    totalDolares: totalPesos / TIPO_DE_CAMBIO.valor
  };
}

function textoTotal(importe) {
  if (monedaElegida() === 'USD') {
    return {
      principal: formatoDolares.format(importe.totalDolares),
      secundario: 'Equivale a ' + formatoPesos.format(importe.totalPesos) + ' (pesos argentinos)'
    };
  }
  return {
    principal: formatoPesos.format(importe.totalPesos),
    secundario: 'Referencia en dólares: ' + formatoDolares.format(importe.totalDolares)
  };
}

function actualizarImporte() {
  var importe = calcularImporte();
  var total = textoTotal(importe);

  document.getElementById('importe-jornada').textContent = importe.jornada ? importe.jornada.dataset.nombre : 'Sin elegir';
  document.getElementById('importe-unitario').textContent = formatoPesos.format(importe.precioJornada);
  document.getElementById('importe-adicionales').textContent = formatoPesos.format(importe.precioAdicionales);
  document.getElementById('importe-por-persona').textContent = formatoPesos.format(importe.porPersona);
  document.getElementById('importe-personas').textContent = importe.personas ? importe.personas : '—';
  document.getElementById('importe-total').textContent = total.principal;
  document.getElementById('importe-equivalente').textContent = total.secundario;
}

var validadores = {
  jornada: function () {
    return jornadaElegida() ? '' : 'Elegí una jornada para continuar.';
  },
  fecha: function () {
    var valor = formulario.fecha.value;
    if (!valor) return 'Elegí la fecha de la jornada.';
    var fecha = leerFecha(valor);
    if (!fecha) return 'La fecha no es válida. Usá el formato día/mes/año.';
    if (fecha < hoySinHora()) return 'La fecha no puede ser anterior a hoy.';
    if (fecha > fechaMaxima()) return 'Por ahora solo se puede reservar hasta 6 meses adelante.';
    if (fecha.getDay() !== 0 && fecha.getDay() !== 6) return 'Las jornadas son sábados o domingos: elegí un día de fin de semana.';
    return '';
  },
  cantidad: function () {
    return cantidadPersonas() ? '' : 'Ingresá una cantidad de personas entre 1 y ' + MAXIMO_PERSONAS + '.';
  },
  nombre: function () {
    var valor = formulario.nombre.value.trim();
    if (!valor) return 'Escribí tu nombre y apellido.';
    if (!/^\S{2,}\s+\S{2,}/.test(valor)) return 'Escribí nombre y apellido (por ejemplo: Ana Pérez).';
    return '';
  },
  email: function () {
    var valor = formulario.email.value.trim();
    if (!valor) return 'Escribí tu correo electrónico.';
    if (!esEmailValido(valor)) return 'El correo no parece válido: revisá que tenga @ y un dominio (por ejemplo: nombre@correo.com).';
    return '';
  },
  telefono: function () {
    var valor = formulario.telefono.value.trim();
    if (!valor) return '';
    if (!/^[\d\s()+-]+$/.test(valor)) return 'El teléfono solo puede tener números, espacios, guiones o el signo +.';
    var digitos = valor.replace(/\D/g, '').length;
    if (digitos < 8 || digitos > 15) return 'El teléfono debe tener entre 8 y 15 números.';
    return '';
  },
  mayor: function () {
    return formulario.mayor.checked ? '' : 'Confirmá que sos mayor de 18 años o que participás con un adulto responsable.';
  }
};

function agregarDato(lista, termino, valor) {
  var fila = document.createElement('div');
  fila.className = 'grid gap-1 border-b border-techo-100 py-3 sm:grid-cols-3';
  var dt = document.createElement('dt');
  dt.className = 'font-bold text-techo-900';
  dt.textContent = termino;
  var dd = document.createElement('dd');
  dd.className = 'sm:col-span-2';
  dd.textContent = valor;
  fila.appendChild(dt);
  fila.appendChild(dd);
  lista.appendChild(fila);
}

function mostrarPaso(paso) {
  [pasoFormulario, pasoResumen, pasoConfirmacion].forEach(function (seccion) {
    seccion.classList.toggle('hidden', seccion !== paso);
  });
  var titulo = paso.querySelector('[data-foco]');
  if (titulo) titulo.focus();
}

function armarResumen() {
  var importe = calcularImporte();
  var total = textoTotal(importe);
  var adicionales = adicionalesElegidos().map(function (adicional) {
    return adicional.dataset.nombre + ' (' + formatoPesos.format(Number(adicional.dataset.precio)) + ')';
  });
  var lista = document.getElementById('resumen-datos');
  lista.innerHTML = '';

  agregarDato(lista, 'Jornada', importe.jornada.dataset.nombre);
  agregarDato(lista, 'Lugar', importe.jornada.dataset.lugar);
  agregarDato(lista, 'Fecha', formatoFecha.format(leerFecha(formulario.fecha.value)));
  agregarDato(lista, 'Personas', String(importe.personas));
  agregarDato(lista, 'Adicionales por persona', adicionales.length ? adicionales.join(', ') : 'Ninguno');
  agregarDato(lista, 'Aporte por persona', formatoPesos.format(importe.porPersona));
  agregarDato(lista, 'Total', total.principal + ' · ' + total.secundario);
  agregarDato(lista, 'Tipo de cambio', '1 US$ = ' + formatoPesos.format(TIPO_DE_CAMBIO.valor) + ' (' + TIPO_DE_CAMBIO.fuente + ', ' + TIPO_DE_CAMBIO.fecha + ')');
  agregarDato(lista, 'Nombre', formulario.nombre.value.trim());
  agregarDato(lista, 'Correo electrónico', formulario.email.value.trim());
  agregarDato(lista, 'Teléfono', formulario.telefono.value.trim() || 'No informado');
}

function confirmar() {
  var numero = 'TPA-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
  document.getElementById('confirmacion-numero').textContent = numero;
  document.getElementById('confirmacion-nombre').textContent = formulario.nombre.value.trim().split(/\s+/)[0];
  document.getElementById('confirmacion-email').textContent = formulario.email.value.trim();
  document.getElementById('confirmacion-jornada').textContent = jornadaElegida().dataset.nombre;
  document.getElementById('confirmacion-fecha').textContent = formatoFecha.format(leerFecha(formulario.fecha.value));
  mostrarPaso(pasoConfirmacion);
}

function reiniciar() {
  formulario.reset();
  limpiarErrores(formulario, validadores, cajaErrores);
  actualizarImporte();
  mostrarPaso(pasoFormulario);
}

function preseleccionarJornada() {
  var buscada = new URLSearchParams(window.location.search).get('jornada');
  if (!buscada) return;
  formulario.querySelectorAll('input[name="jornada"]').forEach(function (opcion) {
    if (opcion.value === buscada) opcion.checked = true;
  });
}

if (formulario) {
  formulario.fecha.min = aTextoISO(hoySinHora());
  formulario.fecha.max = aTextoISO(fechaMaxima());
  document.getElementById('tipo-cambio').textContent =
    '1 US$ = ' + formatoPesos.format(TIPO_DE_CAMBIO.valor) + ' · Fuente: ' + TIPO_DE_CAMBIO.fuente + ', cotización del ' + TIPO_DE_CAMBIO.fecha + '.';

  preseleccionarJornada();
  actualizarImporte();
  activarValidacionEnVivo(formulario, validadores);

  formulario.addEventListener('input', actualizarImporte);
  formulario.addEventListener('change', actualizarImporte);

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    formulario.dataset.intentado = 'true';
    var errores = validarCampos(validadores);
    mostrarResumenErrores(cajaErrores, errores);
    if (errores.length) return;
    armarResumen();
    mostrarPaso(pasoResumen);
  });

  document.getElementById('boton-editar').addEventListener('click', function () {
    mostrarPaso(pasoFormulario);
    formulario.querySelector('input[name="jornada"]:checked').focus();
  });
  document.getElementById('boton-confirmar').addEventListener('click', confirmar);
  document.getElementById('boton-otra').addEventListener('click', reiniciar);
}
