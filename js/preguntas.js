var PREGUNTAS = [
  {
    categoria: 'Sumarme',
    pregunta: '¿Necesito experiencia previa para participar?',
    respuesta: 'No. En ninguna jornada hace falta experiencia previa en construcción: se trabaja siguiendo las indicaciones de la coordinación de TECHO. En los eventos tampoco hace falta experiencia con chicos, porque los coordinadores explican cada juego antes de empezar.',
    claves: 'requisitos saber construir principiante primera vez',
    enlace: { texto: 'Ver las 5 paradas', url: 'index.html#mapa-del-recorrido' }
  },
  {
    categoria: 'Sumarme',
    pregunta: '¿Cómo me inscribo a una jornada?',
    respuesta: 'Desde Sumate elegís la jornada, la fecha, la cantidad de personas y los adicionales. Antes de confirmar ves un resumen con el total. En este sitio la inscripción es una simulación: no se envían datos a TECHO ni se cobra nada.',
    claves: 'anotarme anotar registrarme formulario reservar sumarme',
    enlace: { texto: 'Ir a la inscripción', url: 'sumate.html#inscripcion' }
  },
  {
    categoria: 'Sumarme',
    pregunta: '¿Puedo ir con un grupo o con menores de edad?',
    respuesta: 'El formulario admite de 1 a 10 personas por inscripción; para grupos más grandes, escribinos. Quien se inscribe confirma que es mayor de 18 años o que participa con un adulto responsable.',
    claves: 'amigos familia chicos hijos edad cantidad personas adulto',
    enlace: { texto: 'Escribir una consulta', url: 'contacto.html' }
  },
  {
    categoria: 'Sumarme',
    pregunta: '¿Puedo ser voluntario o voluntaria de forma regular?',
    respuesta: 'Sí. Si querés sumarte de forma estable a una sede, las convocatorias están en la plataforma de actividades de TECHO.',
    claves: 'voluntariado estable permanente sede convocatoria',
    enlace: { texto: 'Ver actividades en actividades.techo.org (sitio externo)', url: 'https://actividades.techo.org/' }
  },
  {
    categoria: 'Jornadas',
    pregunta: '¿Cuánto cuesta participar?',
    respuesta: 'Los aportes de este sitio son valores de referencia para mostrar el cálculo: $ 35.000 por persona la vivienda de emergencia, $ 15.000 infraestructura comunitaria y vivienda progresiva, $ 6.000 el Día de la Niñez y sin costo la clasificación de colectas. Los adicionales son opcionales.',
    claves: 'sale precio aporte valor pagar plata pesos dolares costo adicionales traslado remera kit',
    enlace: { texto: 'Calcular mi aporte', url: 'sumate.html#inscripcion' }
  },
  {
    categoria: 'Jornadas',
    pregunta: '¿Cuánto dura cada jornada y en qué horario?',
    respuesta: 'La vivienda de emergencia lleva un fin de semana, sábado y domingo, de 8:30 a 17 h aproximadamente. Infraestructura comunitaria y vivienda progresiva llevan un día, en el mismo horario. El Día de la Niñez dura unas 4 horas, de 14 a 18 h. La clasificación de colectas dura de 2 a 3 horas.',
    claves: 'hora horas tiempo fecha dia finde sabado domingo',
    enlace: { texto: 'Ver las fechas para agendar', url: 'index.html#titulo-destacados' }
  },
  {
    categoria: 'Jornadas',
    pregunta: '¿Qué tengo que llevar?',
    respuesta: 'Ropa que se pueda ensuciar, calzado cerrado, protector solar y agua propia. Para la vivienda de emergencia sumá abrigo y un piloto o campera impermeable. Para infraestructura comunitaria, si tenés, guantes de trabajo.',
    claves: 'llevo llevar traer ropa vestimenta calzado zapatillas guantes equipo recomendaciones',
    enlace: { texto: 'Ver las recomendaciones de la parada 1', url: 'vivienda-emergencia.html#titulo-recomendaciones' }
  },
  {
    categoria: 'Jornadas',
    pregunta: '¿Se suspende la obra si llueve?',
    respuesta: 'En la vivienda de emergencia la obra sigue aunque llueva, así que conviene llevar un piloto o una campera impermeable. Se trabaja al aire libre desde la mañana hasta la tarde.',
    claves: 'lluvia clima tiempo cancela',
    enlace: { texto: 'Ver la parada 1', url: 'vivienda-emergencia.html' }
  },
  {
    categoria: 'Jornadas',
    pregunta: '¿Es muy exigente físicamente? Tengo una limitación de movilidad',
    respuesta: 'Las jornadas de obra son trabajo físico: se cargan materiales y, según la jornada, se trabaja en altura. Si tenés alguna limitación, avisá a la sede antes de la jornada para ver qué tareas podés hacer. El Día de la Niñez no incluye trabajo de obra.',
    claves: 'esfuerzo fuerza discapacidad accesibilidad altura salud',
    enlace: { texto: 'Escribir una consulta', url: 'contacto.html' }
  },
  {
    categoria: 'Recorrido',
    pregunta: '¿Se recorren las 5 paradas en un mismo día?',
    respuesta: 'No. Cada parada es una jornada distinta y las podés hacer por separado. El orden sugerido arranca en Florencio Varela y sigue por Berazategui, Quilmes, Avellaneda y la Ciudad de Buenos Aires.',
    claves: 'orden mapa todas paradas itinerario',
    enlace: { texto: 'Ver el mapa del recorrido', url: 'index.html#mapa-del-recorrido' }
  },
  {
    categoria: 'Recorrido',
    pregunta: '¿Dónde son las jornadas y cómo llego?',
    respuesta: 'Las ubicaciones del mapa son aproximadas y la dirección exacta se comparte con quienes se inscriben, para cuidar la privacidad de las familias. TECHO organiza el traslado desde un punto de encuentro; si vas por tu cuenta, a la zona se llega en tren (línea Roca) o colectivo desde la Ciudad.',
    claves: 'direccion ubicacion lugar transporte colectivo tren traslado barrio zona sur',
    enlace: { texto: 'Ver el mapa del recorrido', url: 'index.html#mapa-del-recorrido' }
  },
  {
    categoria: 'Recorrido',
    pregunta: '¿Puedo visitar un barrio sin inscribirme?',
    respuesta: 'No. Las jornadas se coordinan con la sede de TECHO Argentina antes de cada fecha: no son visitas libres. La excepción es donar artículos para una colecta, que no requiere inscripción.',
    claves: 'visita libre acceso entrada coordinar',
    enlace: { texto: 'Ir a la inscripción', url: 'sumate.html#inscripcion' }
  },
  {
    categoria: 'Viviendas',
    pregunta: '¿Qué diferencia hay entre la vivienda de emergencia y la progresiva?',
    respuesta: 'La de emergencia es una casa prefabricada de madera de 18 m², que responde a una urgencia y se construye en un fin de semana. La progresiva arranca en 18 m², se puede ampliar a 36 m² o más y se construye cuando la familia ya cuenta con un terreno propio o regularizado.',
    claves: 'casa modulo madera ampliar terreno metros',
    enlace: { texto: 'Ver la parada 3', url: 'vivienda-progresiva.html' }
  },
  {
    categoria: 'Viviendas',
    pregunta: '¿Qué obras se hacen además de las viviendas?',
    respuesta: 'Veredas, escaleras, caminos, plazas, comedores y salones comunitarios. Estas obras se deciden junto a los vecinos en mesas de trabajo barrial. También hay jornadas recreativas, como el Día de la Niñez.',
    claves: 'infraestructura comunitaria vecinos mesa eventos ninez',
    enlace: { texto: 'Ver la parada 2', url: 'infraestructura-comunitaria.html' }
  },
  {
    categoria: 'Donaciones',
    pregunta: '¿Qué puedo donar y dónde?',
    respuesta: 'Ropa, calzado, juguetes, pañales y útiles escolares, en la sede de TECHO Argentina en la Ciudad de Buenos Aires o en puntos aliados. Conviene revisar qué pide la campaña vigente. La ropa y el calzado se reciben en buen estado; los juguetes y útiles, nuevos o en muy buen estado.',
    claves: 'donar donacion colecta articulos juguete ropa panales utiles',
    enlace: { texto: 'Ver la parada 5', url: 'colectas.html' }
  },
  {
    categoria: 'Donaciones',
    pregunta: '¿Qué diferencia hay entre estas colectas y la Colecta Anual?',
    respuesta: 'Las colectas solidarias reúnen artículos y las organiza el equipo de voluntariado de cada sede. La Colecta Anual es la campaña nacional de recaudación de fondos en dinero de TECHO, en abril y mayo.',
    claves: 'donar dinero plata campana nacional abril mayo',
    enlace: { texto: 'Ver la Colecta Anual en argentina.techo.org (sitio externo)', url: 'https://argentina.techo.org/colecta/' }
  },
  {
    categoria: 'Este sitio',
    pregunta: '¿Este es el sitio oficial de TECHO?',
    respuesta: 'No. Es un proyecto académico del Grupo 6 de Diseño y Desarrollo Web. Los formularios son simulaciones: no envían datos ni cobran nada. Para escribirle a TECHO, usá info.argentina@techo.org o su sitio oficial.',
    claves: 'oficial simulacion academico contacto correo mail facultad',
    enlace: { texto: 'Ir al sitio oficial de TECHO Argentina (sitio externo)', url: 'https://argentina.techo.org/' }
  }
];

var PALABRAS_VACIAS = ['a', 'al', 'como', 'con', 'cual', 'cuales', 'cuando', 'cuanto', 'cuanta', 'de', 'del', 'donde', 'el', 'en', 'es', 'esta', 'este', 'hay', 'la', 'las', 'le', 'lo', 'los', 'me', 'mi', 'para', 'por', 'puedo', 'que', 'se', 'si', 'son', 'su', 'tengo', 'un', 'una', 'y', 'yo'];

var campoBusqueda = document.getElementById('busqueda-preguntas');
var botonLimpiar = document.getElementById('limpiar-busqueda');
var contenedorCategorias = document.getElementById('categorias-preguntas');
var listaPreguntas = document.getElementById('lista-preguntas');
var estadoPreguntas = document.getElementById('estado-preguntas');
var sinResultados = document.getElementById('sin-resultados');
var categoriaActiva = 'Todas';

function normalizar(texto) {
  return texto.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
}

function palabrasDe(texto) {
  return normalizar(texto)
    .split(/[^a-z0-9]+/)
    .filter(function (palabra) {
      return palabra && PALABRAS_VACIAS.indexOf(palabra) === -1;
    })
    .map(function (palabra) {
      return palabra.length > 4 ? palabra.replace(/iones$/, 'ion').replace(/s$/, '') : palabra;
    });
}

function puntuar(item, palabras) {
  var pregunta = normalizar(item.pregunta);
  var claves = normalizar(item.claves);
  var respuesta = normalizar(item.respuesta);
  return palabras.reduce(function (puntos, palabra) {
    if (pregunta.indexOf(palabra) !== -1) return puntos + 3;
    if (claves.indexOf(palabra) !== -1) return puntos + 2;
    if (respuesta.indexOf(palabra) !== -1) return puntos + 1;
    return puntos;
  }, 0);
}

function buscar(texto) {
  var palabras = palabrasDe(texto);
  var hayTexto = texto.trim() !== '';

  return PREGUNTAS
    .map(function (item, indice) {
      return { item: item, indice: indice, puntos: hayTexto ? puntuar(item, palabras) : 0 };
    })
    .filter(function (resultado) {
      var enCategoria = categoriaActiva === 'Todas' || resultado.item.categoria === categoriaActiva;
      return enCategoria && (!hayTexto || resultado.puntos > 0);
    })
    .sort(function (a, b) {
      return b.puntos - a.puntos || a.indice - b.indice;
    })
    .map(function (resultado) {
      return resultado.item;
    });
}

function crearPregunta(item, indice, abierta) {
  var li = document.createElement('li');
  li.className = 'rounded-lg border border-techo-100 bg-white';

  var titulo = document.createElement('h3');
  var boton = document.createElement('button');
  var idRespuesta = 'respuesta-' + indice;
  boton.type = 'button';
  boton.className = 'flex w-full items-start justify-between gap-4 rounded-lg p-4 text-left font-titulos font-bold text-techo-900 hover:bg-techo-50';
  boton.setAttribute('aria-expanded', abierta ? 'true' : 'false');
  boton.setAttribute('aria-controls', idRespuesta);

  var texto = document.createElement('span');
  texto.textContent = item.pregunta;
  var signo = document.createElement('span');
  signo.setAttribute('aria-hidden', 'true');
  signo.className = 'text-xl leading-none';
  signo.textContent = abierta ? '−' : '+';
  boton.appendChild(texto);
  boton.appendChild(signo);
  titulo.appendChild(boton);

  var panel = document.createElement('div');
  panel.id = idRespuesta;
  panel.className = 'px-4 pb-4';
  panel.hidden = !abierta;

  var parrafo = document.createElement('p');
  parrafo.textContent = item.respuesta;
  var enlace = document.createElement('a');
  enlace.href = item.enlace.url;
  enlace.className = 'mt-2 inline-block font-bold text-techo-900 underline underline-offset-2 hover:text-naranja-700';
  enlace.textContent = item.enlace.texto;
  panel.appendChild(parrafo);
  panel.appendChild(enlace);

  boton.addEventListener('click', function () {
    var estabaAbierta = boton.getAttribute('aria-expanded') === 'true';
    boton.setAttribute('aria-expanded', estabaAbierta ? 'false' : 'true');
    signo.textContent = estabaAbierta ? '+' : '−';
    panel.hidden = estabaAbierta;
  });

  li.appendChild(titulo);
  li.appendChild(panel);
  return li;
}

function mostrarPreguntas() {
  var texto = campoBusqueda.value;
  var hayTexto = texto.trim() !== '';
  var resultados = buscar(texto);

  listaPreguntas.innerHTML = '';
  resultados.forEach(function (item, indice) {
    listaPreguntas.appendChild(crearPregunta(item, indice, hayTexto && indice === 0));
  });

  sinResultados.classList.toggle('hidden', resultados.length > 0);
  botonLimpiar.classList.toggle('hidden', !hayTexto);

  var cantidad = resultados.length === 1 ? '1 pregunta' : resultados.length + ' preguntas';
  var filtro = categoriaActiva === 'Todas' ? '' : ' en ' + categoriaActiva;
  estadoPreguntas.textContent = hayTexto
    ? cantidad + filtro + ' para "' + texto.trim() + '". La más cercana aparece abierta.'
    : cantidad + filtro + '.';
}

function crearBotonCategoria(nombre) {
  var boton = document.createElement('button');
  boton.type = 'button';
  boton.textContent = nombre;
  boton.className = 'rounded-full border-2 border-techo-900 px-4 py-1.5 text-sm font-bold text-techo-900 hover:bg-techo-100 aria-[pressed=true]:bg-techo-900 aria-[pressed=true]:text-white';
  boton.setAttribute('aria-pressed', nombre === categoriaActiva ? 'true' : 'false');
  boton.addEventListener('click', function () {
    categoriaActiva = nombre;
    contenedorCategorias.querySelectorAll('button').forEach(function (otro) {
      otro.setAttribute('aria-pressed', otro === boton ? 'true' : 'false');
    });
    mostrarPreguntas();
  });
  return boton;
}

['Todas'].concat(PREGUNTAS.map(function (item) {
  return item.categoria;
})).filter(function (nombre, indice, lista) {
  return lista.indexOf(nombre) === indice;
}).forEach(function (nombre) {
  var li = document.createElement('li');
  li.appendChild(crearBotonCategoria(nombre));
  contenedorCategorias.appendChild(li);
});

document.getElementById('form-preguntas').addEventListener('submit', function (evento) {
  evento.preventDefault();
});
campoBusqueda.addEventListener('input', mostrarPreguntas);
botonLimpiar.addEventListener('click', function () {
  campoBusqueda.value = '';
  mostrarPreguntas();
  campoBusqueda.focus();
});

mostrarPreguntas();
