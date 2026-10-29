function distanciaKm(a, b) {
  var radioTierra = 6371;
  var aRad = Math.PI / 180;
  var dLat = (b.lat - a.lat) * aRad;
  var dLng = (b.lng - a.lng) * aRad;
  var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(a.lat * aRad) * Math.cos(b.lat * aRad) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
  return 2 * radioTierra * Math.asin(Math.sqrt(h));
}

function formatearKm(km) {
  return km.toLocaleString('es-AR', { minimumFractionDigits: 1, maximumFractionDigits: 1 }) + ' km';
}

function iconoParada(parada, esActual) {
  var tamanio = esActual ? 44 : 36;
  var clases = esActual
    ? 'bg-naranja-700 text-lg ring-4 ring-naranja-500/40'
    : 'bg-techo-900 text-base';
  return L.divIcon({
    className: '',
    html: '<span class="flex h-full w-full items-center justify-center rounded-full border-2 border-white font-titulos font-bold text-white shadow-lg ' + clases + '">' + parada.numero + '</span>',
    iconSize: [tamanio, tamanio],
    iconAnchor: [tamanio / 2, tamanio / 2],
    popupAnchor: [0, -tamanio / 2]
  });
}

function crearMapaRecorrido(contenedor, numeroActual) {
  if (typeof L === 'undefined') {
    contenedor.innerHTML = '<p class="p-4 text-sm text-tinta-suave">No se pudo cargar el mapa interactivo. Revisá tu conexión y volvé a cargar la página.</p>';
    return;
  }

  var mapa = L.map(contenedor, { scrollWheelZoom: false });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 18,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(mapa);

  var puntos = PARADAS.map(function (parada) {
    return [parada.lat, parada.lng];
  });

  L.polyline(puntos, { color: '#0288d1', weight: 4, dashArray: '8 10' }).addTo(mapa);

  PARADAS.forEach(function (parada) {
    var esActual = parada.numero === numeroActual;
    var marcador = L.marker([parada.lat, parada.lng], {
      icon: iconoParada(parada, esActual),
      title: 'Parada ' + parada.numero + ': ' + parada.nombre + ' (' + parada.localidad + ')',
      zIndexOffset: esActual ? 1000 : 0
    }).addTo(mapa);

    var enlace = esActual
      ? '<span>Estás en esta parada</span>'
      : '<a href="' + parada.url + '">Ver parada ' + parada.numero + '</a>';
    marcador.bindPopup(
      '<strong>Parada ' + parada.numero + ': ' + parada.nombre + '</strong><br>' +
      parada.localidad + ' (zona aproximada)<br>' + enlace
    );
  });

  if (numeroActual) {
    var actual = PARADAS[numeroActual - 1];
    mapa.setView([actual.lat, actual.lng], 12);
  } else {
    mapa.fitBounds(puntos, { padding: [30, 30] });
  }
}

function listarParadas(lista) {
  var total = 0;
  lista.innerHTML = '';

  PARADAS.forEach(function (parada, indice) {
    var item = document.createElement('li');
    item.className = 'flex gap-3 rounded-lg border border-techo-100 bg-white p-3';

    var numero = document.createElement('span');
    numero.className = 'flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-techo-900 font-titulos font-bold text-white';
    numero.setAttribute('aria-hidden', 'true');
    numero.textContent = parada.numero;

    var texto = document.createElement('div');
    var enlace = document.createElement('a');
    enlace.href = parada.url;
    enlace.className = 'font-bold text-techo-900 underline underline-offset-2 hover:text-naranja-700';
    enlace.textContent = 'Parada ' + parada.numero + ': ' + parada.nombre;

    var detalle = document.createElement('p');
    detalle.className = 'text-sm text-tinta-suave';
    if (indice === 0) {
      detalle.textContent = parada.localidad + ' · punto de partida';
    } else {
      var tramo = distanciaKm(PARADAS[indice - 1], parada);
      total += tramo;
      detalle.textContent = parada.localidad + ' · a ' + formatearKm(tramo) + ' de la parada ' + indice;
    }

    texto.appendChild(enlace);
    texto.appendChild(detalle);
    item.appendChild(numero);
    item.appendChild(texto);
    lista.appendChild(item);
  });

  var salidaTotal = document.getElementById(lista.dataset.total);
  if (salidaTotal) salidaTotal.textContent = formatearKm(total);
}

document.querySelectorAll('[data-mapa-recorrido]').forEach(function (contenedor) {
  crearMapaRecorrido(contenedor, Number(contenedor.dataset.parada) || null);
});

document.querySelectorAll('[data-lista-paradas]').forEach(listarParadas);
