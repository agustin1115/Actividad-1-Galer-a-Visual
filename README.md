# Techo para Argentina

**Materia:** Diseño y Desarrollo Web
**Actividad:** Actividad 2 — Diseño de un Recorrido
**Grupo N.º:** 6
**Integrantes:**
- Calderón, Felipe
- Díaz Seoane, Agustín Edgardo
- Fernández, Nicolás Esteban
- Ferrario, Lorenzo
- Srolovich, Lara

**Categoría elegida:** Recorridos ciudadanos (proyectos sociales)

**Ubicación:** Barrios populares de la Zona Sur del Gran Buenos Aires (Quilmes, Florencio
Varela, entre otros), donde TECHO Argentina tiene trabajo sostenido.

**Repositorio:** https://github.com/agustin1115/Actividad-1-Galer-a-Visual
**Sitio publicado (GitHub Pages):** https://agustin1115.github.io/Actividad-1-Galer-a-Visual/

## Tema y objetivo

Un recorrido por los distintos tipos de intervención que hace TECHO en barrios populares
de la Zona Sur del Gran Buenos Aires (Quilmes, Florencio Varela, entre otros): de la
vivienda de emergencia a la infraestructura comunitaria, mostrando cómo cada proyecto suma
a mejorar la calidad de vida del barrio.

El objetivo es que quien visite el sitio entienda, en cinco pasos, todo lo que hace TECHO
más allá de construir una casa, y sepa cómo puede sumarse.

**Público destinatario:** voluntarios potenciales y donantes, principalmente entre 18 y 35 años.

## Origen del proyecto

Este sitio parte del trabajo individual de la Actividad 1 ("Barrios en Construcción"), una
galería fotográfica de jornadas reales de voluntariado junto a TECHO. Para la Actividad 2 se
reorganizó y amplió esa base para convertirla en un recorrido grupal por los cinco proyectos
de TECHO.

## Los 5 puntos de interés

| # | Punto de interés | Responsable | Estado |
|---|---|---|---|
| 1 | Vivienda de emergencia | Agustín Díaz Seoane | Completo (fotos propias de la Actividad 1) |
| 2 | Infraestructura comunitaria | Lorenzo Ferrario | Completo (veredas + espacio recreativo, fotos propias) |
| 3 | Vivienda progresiva | Felipe Calderón | Completo (guion + fotos propias de una jornada real) |
| 4 | Eventos (Día de la Niñez) | Nicolás Fernández | Completo (guion + fotos propias de un Día de la Niñez) |
| 5 | Colectas (ropa, juguetes, pañales) | Lara Srolovich | Completo (guion + fotos propias de una colecta real) |

Los 5 puntos tienen la estructura de guion completa que pide la consigna (descripción,
información a comunicar, actividades/experiencias, datos útiles, fotos propias y
recomendaciones para el visitante).

## Contenidos incluidos

- **index.html**: página principal, presenta el equipo, el hilo conductor del recorrido y
  el acceso a los 5 puntos de interés.
- **vivienda-emergencia.html**, **infraestructura-comunitaria.html**, **vivienda-progresiva.html**,
  **eventos.html**, **colectas.html**: los 5 puntos de interés, completos y con fotos propias.
- **sumate.html**: cierre del recorrido, con el enlace real de donación/voluntariado de TECHO.
- **css/style.css**: hoja de estilos compartida por todas las páginas.
- **js/main.js**: menú móvil (despliega/oculta la navegación al tocar "Menú" en pantallas chicas).
- **img/**: fotografías e íconos utilizados en el recorrido.
- **img/mapa-recorrido.svg**: mapa del recorrido (Inicio + 5 puntos de interés + cierre).

## Mapa del sitio

```
index.html (Inicio)
├── vivienda-emergencia.html          (1. Vivienda de emergencia)
├── infraestructura-comunitaria.html  (2. Infraestructura comunitaria)
├── vivienda-progresiva.html          (3. Vivienda progresiva)
├── eventos.html                      (4. Eventos)
├── colectas.html                     (5. Colectas)
└── sumate.html                       (Sumate / CTA)
```

Todas las páginas comparten el mismo header, barra de navegación y footer, y están
enlazadas entre sí desde el menú, marcando con la clase `.activo` la página en la que
está el usuario.

## Design System

**Paleta de colores** (definida como variables CSS en `:root`):

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0288d1` | Header, bordes, títulos, estado activo del nav |
| `--color-primary-dark` | `#01579b` | Hover/activo del nav (fondo blanco + este texto) |
| `--color-primary-light` | `#4fc3f7` | Barra de navegación, bordes de fotos |
| `--color-accent` | `#ef6c00` | Botones, números de punto de interés, acentos |
| `--color-bg` / `--color-bg-alt` | `#ffffff` / `#f2f8fb` | Fondo general y de tarjetas |
| `--color-text` / `--color-text-light` | `#222222` / `#555555` | Texto principal y secundario |

El hover del nav se corrigió para cumplir contraste WCAG AA (mínimo 4.5:1): fondo blanco +
texto `--color-primary-dark`, en vez del fondo celeste con texto blanco que tenía la
Actividad 1 (insuficiente, ≈3.9:1).

**Tipografía:**
- Títulos: `--font-titulos` → Trebuchet MS, Verdana, sans-serif
- Texto: `--font-texto` → Arial, Helvetica, sans-serif

**Componentes reutilizables:**
- `.site-header` / `.site-nav` / `.site-footer`: encabezado, navegación y pie, iguales en
  todas las páginas.
- `.gallery-card` + `.btn`: tarjetas de presentación de cada punto de interés en el index.
- `.gallery-grid` + `.gallery-item` (figure/figcaption): grilla de fotos con información
  debajo de cada imagen.

**Layout:** Flexbox para la navegación y las tarjetas del index; CSS Grid para las grillas
de fotos. Diseño responsive con unidades relativas (`rem`/`em`) y dos media queries (700px
y 450px) que reordenan el menú y reducen las columnas de la grilla de fotos (3 → 2 → 1).

## Fuentes reales citadas

- [argentina.techo.org/que-hacemos](https://argentina.techo.org/que-hacemos/)
- [argentina.techo.org/reporte2023](https://argentina.techo.org/reporte2023/)
- [argentina.techo.org/colecta](https://argentina.techo.org/colecta/)
- [argentina.techo.org/involucrate](https://argentina.techo.org/involucrate/)
- [argentina.techo.org/sumate](https://argentina.techo.org/sumate/)
- [argentina.techo.org/voluntariado](https://argentina.techo.org/voluntariado/)

Eventos y Colectas no tienen una página oficial detallada en el sitio nacional de TECHO:
para esos dos guiones, la fuente es la experiencia real de quien haya participado.

## Uso de IA

Para el desarrollo de este trabajo se utilizó **Claude Code** como herramienta de apoyo,
para la corrección de errores en el código (HTML/CSS), la investigación de datos reales
en techo.org.ar y el versionado de Git/GitHub. Las decisiones de contenido, diseño y
estructura del sitio son del equipo.
