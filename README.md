# Barrios en Construcción

**Nombre y apellido:** Agustín Díaz Seoane

**Nombre de la galería:** Barrios en Construcción

**Tema elegido:** Fotografías de jornadas de voluntariado junto a la organización TECHO en barrios populares.

## Descripción de la propuesta

El sitio es una galería fotográfica que documenta el trabajo realizado durante distintas
jornadas de voluntariado junto a TECHO. Las fotos muestran tareas de mejora de la
infraestructura barrial hechas en conjunto con vecinos y voluntarios.

## Objetivo de la galería

Visibilizar el trabajo colectivo que se lleva adelante en los barrios populares para
mejorar su infraestructura, mostrando de forma clara y ordenada las distintas tareas
realizadas durante las jornadas de voluntariado.

## Contenidos incluidos

- **index.html**: página principal con la presentación del tema y acceso a los tres
  elementos de la galería.
- **veredas.html**: página dedicada a la jornada de construcción de veredas de acceso
  (encofrado, malla de hierro y colado de cemento).
- **neumaticos.html**: página dedicada a la jornada de armado de un espacio recreativo
  con neumáticos reciclados.
- **construccion.html**: página dedicada al registro fotográfico general de las
  jornadas de construcción junto a TECHO.
- **css/style.css**: hoja de estilos compartida por todas las páginas del sitio.
- **img/**: fotografías utilizadas en la galería.

## Mapa del sitio

```
index.html (Inicio)
├── veredas.html        (Construcción de veredas)
├── neumaticos.html     (Espacio recreativo)
└── construccion.html   (Construcción)
```

Las cuatro páginas comparten el mismo header, barra de navegación y footer, y están
enlazadas entre sí desde el menú de navegación, marcando con la clase `.activo` la
página en la que el usuario se encuentra.

## Design System

**Paleta de colores** (definida como variables CSS en `:root`):

| Token | Valor | Uso |
|---|---|---|
| `--color-primary` | `#0288d1` | Header, bordes, títulos, estado activo del nav |
| `--color-primary-light` | `#4fc3f7` | Barra de navegación, bordes de fotos |
| `--color-accent` | `#ef6c00` | Botones "Ver galería" y hover de enlaces |
| `--color-bg` / `--color-bg-alt` | `#ffffff` / `#f2f8fb` | Fondo general y fondo de tarjetas |
| `--color-text` / `--color-text-light` | `#222222` / `#555555` | Texto principal y texto secundario |

Paleta basada en el celeste y azul asociados a TECHO, con un acento naranja/terracota
que remite a la tierra y los materiales de construcción.

**Tipografía:**
- Títulos: `--font-titulos` → Trebuchet MS, Verdana, sans-serif
- Texto: `--font-texto` → Arial, Helvetica, sans-serif

**Componentes reutilizables:**
- `.site-header` / `.site-nav` / `.site-footer`: encabezado, navegación y pie, iguales
  en las 4 páginas.
- `.gallery-card` + `.btn`: tarjetas de presentación de cada elemento en el index.
- `.gallery-grid`: grilla de fotos (CSS Grid) usada en veredas, neumáticos y
  construcción.
- `.hero-img`: imagen destacada de la página principal.

**Layout:** Flexbox para la navegación y las tarjetas del index; CSS Grid para las
grillas de fotos. Diseño responsive con unidades relativas (`rem`/`em`) y dos media
queries (700px y 450px) que reordenan el menú y reducen las columnas de la grilla de
fotos (3 → 2 → 1).

## Uso de IA

Para el desarrollo de este trabajo utilicé **Claude Code** como herramienta de apoyo,
puntualmente para la corrección de errores en el código (HTML/CSS) y para el
versionado y manejo de Git/GitHub del proyecto. Las decisiones de contenido, diseño y
estructura del sitio son propias.
