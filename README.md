# Techo para Argentina

**Materia:** Diseño y Desarrollo Web
**Actividad:** Actividad 2 — Diseño de un Recorrido
**Grupo N.º:** [completar]
**Integrantes:** Agustín Díaz Seoane, [Integrante 2], [Integrante 3], [Integrante 4], [Integrante 5]

**Categoría elegida:** Recorridos ciudadanos (proyectos sociales)

## Tema y objetivo

Un recorrido por los distintos tipos de intervención que hace TECHO en asentamientos
populares de Argentina: de la vivienda de emergencia a la infraestructura comunitaria,
mostrando cómo cada proyecto suma a mejorar la calidad de vida del barrio.

El objetivo es que quien visite el sitio entienda, en cinco pasos, todo lo que hace TECHO
más allá de construir una casa, y sepa cómo puede sumarse.

**Público destinatario:** voluntarios potenciales y donantes, principalmente entre 18 y 35 años.

## Origen del proyecto

Este sitio parte del trabajo individual de la Actividad 1 ("Barrios en Construcción"), una
galería fotográfica de jornadas reales de voluntariado junto a TECHO. Para la Actividad 2 se
reorganizó y amplió esa base para convertirla en un recorrido grupal por los cinco proyectos
de TECHO.

## Los 5 puntos de interés

| # | Punto de interés | Estado |
|---|---|---|
| 1 | Vivienda de emergencia | Completo (fotos propias de la Actividad 1) |
| 2 | Infraestructura comunitaria | Completo (veredas + espacio recreativo, fotos propias) |
| 3 | Vivienda progresiva | Próximamente |
| 4 | Eventos (Día de la Niñez) | Próximamente |
| 5 | Colectas (ropa, juguetes, pañales) | Próximamente |

Los tres puntos "Próximamente" quedan con un texto de referencia hasta que cada integrante
complete su guion con fotos y contenido propio.

## Contenidos incluidos

- **index.html**: página principal, presenta el equipo, el hilo conductor del recorrido y
  el acceso a los 5 puntos de interés.
- **vivienda-emergencia.html**, **infraestructura-comunitaria.html**: puntos de interés
  completos, con fotos propias.
- **vivienda-progresiva.html**, **eventos.html**, **colectas.html**: puntos de interés en
  construcción.
- **sumate.html**: cierre del recorrido, con el enlace real de donación/voluntariado de TECHO.
- **css/style.css**: hoja de estilos compartida por todas las páginas.
- **img/**: fotografías utilizadas en el recorrido.

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
- `.badge-completo` / `.badge-proximamente`: estado de cada punto de interés en el index.

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
