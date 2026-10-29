# Handoff · Actividad 3 (Grupo 6, Techo para Argentina)

Estado al 29/10/2026. Todo el trabajo está en la rama `claude/amazing-albattani-qku3gl`, pusheada.
**GitHub Pages publica desde `main`**: hasta que se mergee la rama, el sitio online sigue mostrando
la versión de la Actividad 2.

## Qué está hecho

Todo con HTML + Tailwind (CDN) + JavaScript, sin build ni `package.json`.

- **Base:** tokens del Design System en `js/tailwind.config.js`, header/nav/footer nuevos (skip
  link, menú móvil con `aria-expanded` y Escape, `aria-current`), `css/style.css` mínimo (foco
  visible y mapa).
- **Correcciones de la Actividad 2:**
  - Mapa **geográfico** con Leaflet + OpenStreetMap (`js/paradas.js` + `js/mapa.js`): 5 marcadores
    numerados, línea con el orden sugerido, distancia entre paradas y total (en línea recta).
  - Cada punto de interés ahora es una **parada con lugar**: Florencio Varela, Berazategui,
    Quilmes, Avellaneda y CABA.
  - **Design System visible** en `design-system.html`, enlazado desde el footer.
  - Contraste: el celeste del nav (2:1), el naranja de los botones (3,08:1) y el celeste de títulos
    y links no llegaban a AA. Se oscurecieron (ver tabla en `design-system.html`).
- **Inicio** (`index.html`): todo lo que pide 3.1.
- **5 paradas** con plantilla común: breadcrumb, recorrido 1 a 5, datos rápidos, qué vas a conocer,
  actividades, datos útiles, mini-mapa y cómo llegar, galería, recomendaciones, inscripción directa
  (`sumate.html?jornada=<slug>`) y anterior/siguiente. Se conservó el texto de los guiones; en las
  paradas 1 y 2 se sumaron "qué vas a conocer", "actividades" y "recomendaciones" a partir del guion
  del PDF de la Actividad 2.
- **Inscripción** (`sumate.html` + `js/inscripcion.js`): cumple todos los puntos de 3.5.
- **Contacto** (`contacto.html` + `js/contacto.js`): cumple 3.4.
- **README** actualizado para la Actividad 3.

### Cómo se verificó

En esta sesión los CDN (cdn.tailwindcss.com, unpkg.com, tiles de OSM) estaban bloqueados por la red
del entorno, así que se probó con copias locales (Tailwind 3.4.17 compilado con la misma config y
Leaflet 1.9.4 de npm) interceptando esas URLs con Playwright:

- Las 9 páginas a 375, 768 y 1280 px: sin scroll horizontal y sin errores de JavaScript.
- Inscripción: preselección por URL, errores con todo vacío, fecha de miércoles, 11 personas,
  nombre sin apellido, mail inválido, cálculo (3 personas × ($6.000 + $8.000) = $42.000 =
  US$ 27,63), resumen, volver a editar, confirmar y reiniciar.
- Contacto: errores, contador, mensaje corto, envío correcto y reset.
- Teclado: skip link, menú móvil con Enter/Escape, un solo `h1` por página, ninguna imagen sin `alt`,
  ningún `id` duplicado.

**Falta verificarlo en un navegador real con internet** (después del merge, en la URL de Pages):
que cargue Tailwind, que se vean los mosaicos del mapa y que no haya errores en la consola. El CDN
de Tailwind muestra a propósito un aviso en consola ("should not be used in production"): es
esperable; conviene mencionarlo y justificarlo en el Documento 2.

## Pendiente

1. **Mergear la rama a `main`** para que GitHub Pages publique la nueva versión.
2. **Sección 3.6 (API o chat de preguntas frecuentes):** la hace otro integrante. No hay nada
   armado. Header y footer están **copiados en cada una de las 9 páginas**: si se agrega una página
   o un link al menú, hay que repetirlo en todas. Para validar formularios se pueden reutilizar las
   funciones de `js/formularios.js`.
3. **Tipo de cambio:** `js/inscripcion.js` (`TIPO_DE_CAMBIO`) usa $1.520 (BNA, oficial venta,
   cierre del 05/08/2026), el último valor verificable desde esta sesión. **Actualizar valor y fecha
   antes de entregar.** Si el integrante de la API quiere, puede traerlo en vivo (por ejemplo, de
   dolarapi.com) y dejar este valor como respaldo.
4. **Ubicaciones a confirmar por cada integrante:** son aproximadas por localidad y se asignaron
   para armar un recorrido coherente hacia CABA. Si el barrio real de alguna jornada es otro, hay
   que cambiarlo en: `js/paradas.js` (localidad y coordenadas), el texto "lugar" y "Ubicación" de la
   página de la parada, la etiqueta de la tarjeta en `index.html`, `data-lugar` del radio en
   `sumate.html`, el párrafo del mapa en `index.html` y la tabla del `README.md`.
5. **Contribuciones en GitHub:** los commits de esta sesión quedaron a nombre de Nicolás. Cada
   integrante debería hacer commits propios sobre su parada (revisar textos, confirmar la ubicación,
   sumar fotos) y completar su fila en la tabla de contribuciones del README.
6. **Prototipo de Figma:** la profe no pudo abrirlo porque pedía contraseña. Cambiar el permiso a
   "Cualquiera con el link puede ver" y actualizarlo para que coincida con lo implementado (nuevas
   páginas Contacto y Design System, colores ajustados, mapa geográfico).
7. **Precios de la inscripción:** son valores de referencia inventados para la simulación
   ($35.000 fin de semana, $15.000 un día, $6.000 Día de la Niñez, colecta sin costo, adicionales de
   $6.000 a $12.000). Están en los `data-precio` de `sumate.html`, por si el grupo quiere cambiarlos.

### No se tocó, a propósito (configuración mínima del repo)

- El nombre del repo sigue siendo `Actividad-1-Galer-a-Visual` (cambiarlo cambia la URL de Pages).
- `.DS_Store` sigue versionado y no hay `.gitignore`.
- Quedaron archivos sin uso: `img/mapa-recorrido.svg` (el mapa-flujo de la Actividad 2) e
  `img/obrero-*.png`. Se pueden borrar o mostrar en el Documento 1 como antecedente.

## Para los PDFs (todavía no se hicieron)

**Documento 1, diseño:**
- Cambios respecto de la Actividad 2: mapa geográfico en vez de flujo; paradas como lugares; tokens
  de color oscurecidos por contraste (con los números); nav en dos filas (logo arriba, menú abajo)
  como en el prototipo; páginas nuevas Contacto y Design System; el `h1` de cada página pasó a ser
  su título (antes era el nombre del sitio en todas).
- Gestalt:
  - **Proximidad:** datos rápidos agrupados; tarjetas de parada con foto, etiqueta, título, texto y
    botón juntos.
  - **Semejanza:** todas las paradas con la misma estructura y los mismos colores.
  - **Continuidad:** línea punteada del mapa y del recorrido 1 a 5.
  - **Figura-fondo:** bandas `techo-50` alternadas, caja de aporte y bandas de llamada a la acción
    en `techo-900`.
- Nielsen:
  1. **Estado del sistema:** "Parada N de 5", `aria-current`, total en vivo.
  2. **Mundo real:** pesos, fechas en español, "sábado o domingo".
  3. **Control y libertad:** "Volver a editar" y anterior/siguiente.
  4. **Consistencia:** plantilla común.
  5. **Prevención de errores:** fecha con mínimo y máximo, solo fines de semana, rango de
     personas.
  6. **Reconocimiento:** el menú muestra todas las paradas y el resumen se ve antes de confirmar.
  7. **Eficiencia:** "Inscribite a esta jornada" preselecciona la parada.
  8. **Minimalismo.**
  9. **Recuperación de errores:** mensajes específicos con ejemplo y un resumen de errores con
     enlaces a cada campo.
  10. **Ayuda:** textos de ayuda bajo los campos y avisos de simulación.

**Documento 2, desarrollo:**
- Tecnologías y por qué Tailwind por CDN (sin build: cualquier integrante edita clases y se ve en
  Pages al instante).
- Lógica del cálculo: (aporte de la jornada + suma de adicionales) × personas; USD = ARS ÷ tipo de
  cambio.
- Mapa: Leaflet porque permite marcadores numerados, línea de orden y popups. Las distancias se
  calculan con la fórmula de haversine en `js/mapa.js`.
- Problemas detectados y resueltos:
  - Contraste de la paleta original.
  - La línea del recorrido pasaba por encima de los números.
  - Los links en `techo-700` sobre `techo-50` daban 4,48:1.
  - El link a `README.md` de la home se cambió por el del repositorio, donde el README se ve
    renderizado.
  - El header repetía el `h1`.
- Capturas en los 3 tamaños: sacarlas del sitio publicado.
