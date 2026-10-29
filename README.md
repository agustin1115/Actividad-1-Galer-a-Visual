# Techo para Argentina

Un recorrido en cinco paradas por los barrios populares donde trabaja TECHO, de la Zona Sur del
Gran Buenos Aires a la Ciudad de Buenos Aires.

**Materia:** Diseño y Desarrollo Web · **Actividad 3:** Desarrollo e implementación del sitio web · **Grupo N.º 6**

- **Sitio publicado (GitHub Pages):** https://agustin1115.github.io/Actividad-1-Galer-a-Visual/
- **Repositorio:** https://github.com/agustin1115/Actividad-1-Galer-a-Visual
- **Design System:** https://agustin1115.github.io/Actividad-1-Galer-a-Visual/design-system.html
- **Prototipo navegable (Figma):** https://www.figma.com/design/HZvIjLjjhKShU2jYLi5Dzn

## Objetivo

Que quien visite el sitio entienda, en cinco paradas, todo lo que hace TECHO más allá de construir
una casa, y sepa cómo puede sumarse como voluntario o donante.

- **Categoría:** Recorridos ciudadanos (proyectos sociales).
- **Tema / hilo conductor:** de resolver una urgencia habitacional a sostener el vínculo con el
  barrio en el tiempo. Cada parada es un lugar y un tipo de intervención de TECHO.
- **Ubicación:** barrios populares de Florencio Varela, Berazategui, Quilmes y Avellaneda, y la
  Ciudad de Buenos Aires.
- **Público destinatario:** voluntarios potenciales y donantes, principalmente de 18 a 35 años.

El sitio parte del trabajo individual de la Actividad 1 ("Barrios en Construcción"), una galería
de jornadas reales de voluntariado, y del diseño grupal de la Actividad 2.

## Las 5 paradas

| # | Parada | Lugar | Responsable |
|---|---|---|---|
| 1 | Vivienda de emergencia | Florencio Varela | Agustín Díaz Seoane |
| 2 | Infraestructura comunitaria | Berazategui | Lorenzo Ferrario |
| 3 | Vivienda progresiva | Quilmes | Felipe Calderón |
| 4 | Eventos: Día de la Niñez | Avellaneda | Nicolás Fernández |
| 5 | Colectas solidarias | Ciudad de Buenos Aires | Lara Srolovich |

Las ubicaciones son aproximadas, por localidad: las jornadas se hacen dentro de barrios populares
y la dirección exacta se comparte con quienes se inscriben. Las coordenadas están en `js/paradas.js`.

## Funcionalidades

- **Página principal:** presentación, objetivo, público y propuesta de valor, mapa del recorrido,
  acceso a las 5 paradas, recomendaciones, fechas destacadas y equipo.
- **Mapa del recorrido:** mapa interactivo con las 5 paradas numeradas en el orden sugerido, unidas
  por una línea, con la distancia entre paradas y la distancia total calculadas en JavaScript.
  Cada parada tiene además su propio mini-mapa.
- **Páginas de parada:** descripción, qué vas a conocer, actividades, datos útiles, ubicación y
  cómo llegar, galería de fotos propias, recomendaciones, inscripción directa y navegación entre
  paradas (ruta de navegación, recorrido 1 a 5 y anterior/siguiente).
- **Inscripción a una jornada (`sumate.html`):** elección de jornada, fecha (solo fines de semana),
  cantidad de personas y adicionales; cálculo automático del aporte en pesos y su equivalente en
  dólares (tipo de cambio, fuente y fecha a la vista); validación; resumen antes de confirmar y
  confirmación con número de solicitud. **Es una simulación:** no se envían datos ni se cobra nada.
- **Contacto (`contacto.html`):** nombre, correo, motivo y mensaje, con validación y confirmación.
  **El envío es simulado.**
- **Design System (`design-system.html`):** colores con su contraste, tipografía, botones,
  formularios, componentes, íconos, imágenes, mapa, breakpoints y accesibilidad.

## Tecnologías

- **HTML5** semántico: `header`, `nav`, `main`, `section`, `aside`, `footer`, `figure`.
- **Tailwind CSS 3** cargado por CDN (sin paso de compilación). Los tokens del Design System
  (colores y tipografías) están definidos una sola vez en `js/tailwind.config.js`.
  `css/style.css` solo agrega el foco visible global y ajustes del mapa.
- **JavaScript** sin frameworks: menú móvil, mapa, cálculo de distancias, validación de
  formularios, cálculo del aporte y conversión de moneda.

### Servicios externos

| Servicio | Para qué |
|---|---|
| [Tailwind CSS Play CDN](https://cdn.tailwindcss.com) | Estilos |
| [Leaflet 1.9.4](https://leafletjs.com/) (unpkg) | Mapa interactivo |
| [OpenStreetMap](https://www.openstreetmap.org/copyright) | Mosaicos del mapa (© colaboradores de OpenStreetMap) |

El tipo de cambio del formulario de inscripción es un valor de referencia del Banco de la Nación
Argentina (dólar oficial, venta) con su fecha, definido en `js/inscripcion.js`.

## Estructura del proyecto

```
index.html                         Inicio
vivienda-emergencia.html           Parada 1
infraestructura-comunitaria.html   Parada 2
vivienda-progresiva.html           Parada 3
eventos.html                       Parada 4
colectas.html                      Parada 5
sumate.html                        Cierre: inscripción y formas de sumarse
contacto.html                      Formulario de contacto
design-system.html                 Design System
css/style.css                      Foco visible y ajustes del mapa
js/tailwind.config.js              Tokens del Design System para Tailwind
js/main.js                         Menú móvil
js/paradas.js                      Datos de las 5 paradas (nombre, localidad, coordenadas)
js/mapa.js                         Mapa del recorrido y lista de distancias
js/formularios.js                  Funciones de validación compartidas
js/inscripcion.js                  Cálculo del aporte, conversión y flujo de inscripción
js/contacto.js                     Validación y confirmación del contacto
img/                               Fotos propias de las jornadas
logo.png                           Logo de TECHO
```

## Cómo verlo

Online en GitHub Pages (link arriba). Para verlo en local alcanza con abrir `index.html` en el
navegador, o servir la carpeta con cualquier servidor estático, por ejemplo:

```bash
python3 -m http.server 8000
```

Hace falta conexión a internet, porque Tailwind, Leaflet y el mapa se cargan desde CDN.

## Integrantes y contribuciones

| Integrante | Contribución |
|---|---|
| Díaz Seoane, Agustín Edgardo | Galería "Barrios en Construcción" (Actividad 1), base del sitio, guion y fotos de la parada 1. |
| Ferrario, Lorenzo | Guion y fotos de la parada 2 (veredas y espacio recreativo). |
| Calderón, Felipe | Guion y fotos de la parada 3. |
| Fernández, Nicolás Esteban | Guion y fotos de la parada 4. Actividad 3: migración a Tailwind, mapa del recorrido, formularios de inscripción y contacto, Design System. |
| Srolovich, Lara | Guion y fotos de la parada 5. |

## Fuentes

- [argentina.techo.org/que-hacemos](https://argentina.techo.org/que-hacemos/)
- [argentina.techo.org/reporte2023](https://argentina.techo.org/reporte2023/)
- [argentina.techo.org/colecta](https://argentina.techo.org/colecta/)
- [argentina.techo.org/sumate](https://argentina.techo.org/sumate/)
- [argentina.techo.org/voluntariado](https://argentina.techo.org/voluntariado/)

Las fotos son propias, tomadas por los integrantes en jornadas reales. El logo es marca de TECHO y
se usa con fines académicos: este sitio no es el sitio oficial de TECHO Argentina.

## Uso de IA

Se utilizó **Claude Code** como herramienta de apoyo para la corrección y escritura de código
(HTML, Tailwind y JavaScript), la investigación de datos en techo.org y el versionado en Git/GitHub.
Las decisiones de contenido, diseño y estructura del sitio son del equipo.
