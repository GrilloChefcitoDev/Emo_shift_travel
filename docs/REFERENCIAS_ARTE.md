# EMO-SHIFT TRAVEL v13.9 — Referencias y dirección de arte

**Grillo Studio** · Documento de apoyo · 2026

## Fondos de ciudad — revisión v13.9

Los fondos usan tres profundidades y motivos de barrio vinculados al mundo: estación, canal, archivo, azotea y memoria; el cielo suma nubes pixeladas y una luna mate. La idea tomada de las referencias es poblar el entorno con detalles a distancia y luces/vida adheridas al lugar; los edificios y motivos están dibujados en el código del proyecto, no son sprites de Hollow Knight o Celeste.

- [Team Cherry — comparativa de arte de Hollow Knight](https://www.teamcherry.com.au/blog/hollow-knight-then-and-now): aumentar color, detalle, profundidad y elementos delante/detrás del plano jugable.
- [Team Cherry — Green Path](https://www.teamcherry.com.au/blog/the-green-path-a-hollow-knight-tour): vida ambiental y pequeños cambios de luz/aire aportan carácter de zona.
- [Noel Berry — iluminación de Celeste](https://noelberry.ca/posts/celeste_lighting/): usar la luz en relación con el terreno y el ambiente.

La paleta permanece plana, mineral y sin neón ni degradados; los acentos cálidos están contenidos en ventanas y faroles para mantener la silueta jugable legible.

## Ajustes vigentes v13.9

- La cinemática de cierre mantiene legibles los ventanales de estación: el movimiento se resuelve con pequeñas luces de horizonte, no con una franja que tape la arquitectura. Pausa e inventario mantienen guías y tarjetas en filas independientes.

- Silkscreen local reemplaza las fuentes de sistema en títulos y lienzos de texto; los párrafos de lectura usan una sans serif a tamaño mayor.
- Interfaz y nodos usan colores planos de cobre, jade, pizarra, oro y lavanda mineral. No se usan neones ni degradados.
- El mapa vertical agrupado por capítulos toma la referencia de un camino de aprendizaje móvil: nodos alternos comunican continuidad sin que la lista parezca una tabla rígida. La referencia visual aportada por el usuario es Duolingo; no se copian sus personajes, iconos ni paleta.
- Las escenas del prólogo ilustran hospital, recuerdos infantiles, tensión doméstica sugerida y el cambio al Andén Cero. Los hechos de violencia quedan fuera de campo.
- Los corazones de vida son SVG de pixel art sólido. El inventario usa iconos SVG con `image-rendering: pixelated`.
- Los sprites de enemigos terrestres adaptados desde recursos anteriores están en `assets/enemies/ground_v13/`; los voladores mantienen sus carpetas previas.
- Los diálogos nuevos conservan detalles cotidianos y ritmos variados solo cuando nacen de la historia establecida. No se fabrican vivencias de personajes ni se escribe para engañar detectores de texto.
- La tienda usa un puesto de intercambio construido en píxeles sólidos, colores mates de madera, jade, arcilla y papel. Los iconos del catálogo se dibujan en cuadrícula para compartir grosor y escala con el juego.
- Las cinemáticas finales usan subtítulos compactos, reloj, tablero de vías, maleta y plantas. La utilería acompaña el recuerdo sin marcos grandes que tapen el andén.

## Tienda pixel-art — referencias revisadas en v13.7

Estas páginas se usaron solo como referencia de composición, señalética y estados de interfaz. No se descargaron, copiaron ni incorporaron sprites de terceros.

| Referencia | Idea aplicada | Fuente |
|---|---|---|
| Tropical Night UI | Paleta consistente, marcos reutilizables y estados de botón legibles. | [Brunka Games · itch.io](https://brunkagames.itch.io/tropical-night-ui) |
| Pixel Shopkeeper & Tycoon Kit | El puesto exterior se lee con letrero, mostrador y productos visibles. | [riclmbr · itch.io](https://riclmbr.itch.io/pixel-shopkeeper-tycoon-kit-376-shop-sim-sprites-pixel-art) |
| Storefront Shop UI | Precios, moneda y acción de compra se separan visualmente. | [Falvey · itch.io](https://falvey.itch.io/storefront-shop-ui-16-pixel-shop-ui-parts) |

## Referencias externas revisadas

Se consultaron páginas de los propios creadores o tiendas oficiales para observar principios, no para reutilizar activos:

| Referencia | Observación aplicable | Fuente |
|---|---|---|
| **Celeste** | Un plataformas de precisión puede presentar una historia personal en paralelo al reto, con pocas acciones expresivas y reintentos rápidos. Para EMO-SHIFT se toma la claridad emocional y de lectura, no la dificultad extrema. | [Ficha oficial en Steam](https://store.steampowered.com/app/504230/Celeste/) |
| **GRIS** | Uso del espacio, la composición y cambios cromáticos para acompañar una experiencia emocional sin depender de largos textos. EMO-SHIFT aplica el principio con una paleta pixel-art propia. | [Nomada Studio · GRIS](https://nomada.studio/gris-game/) |
| **Neva** | El vínculo entre protagonistas evoluciona con el viaje y se expresa en acciones compartidas. Inspira los gestos de cuidado de la proyección del hermano; su voz no sustituye a la persona real. | [Nomada Studio · Neva](https://nomada.studio/) |
| **Hollow Knight** | Regiones con silueta, atmósfera y orientación propias dentro de un mundo 2D interconectado. EMO-SHIFT distingue estaciones por forma, materiales y color plano. | [Team Cherry en Steam](https://store.steampowered.com/app/367520/Hollow_Knight/) |

El cambio de mapa también responde a la captura de Duolingo entregada por el usuario: recorrido vertical serpenteante, nodos de distintas formas y secciones temáticas. Es referencia de organización visual, no referencia de contenido del juego.

### Tipografía

La fuente [Silkscreen](https://github.com/googlefonts/silkscreen/blob/main/README.md), diseñada por Jason Kottke para interfaz pixelada, se incluye en `assets/fonts/` bajo SIL Open Font License 1.1. Se conserva el archivo de licencia `assets/fonts/OFL-Silkscreen.txt`. La familia se usa en encabezados y etiquetas; el texto corrido conserva la sans serif para no reducir la lectura.

### Créditos de recursos

La historia y el concepto pertenecen al autor. Los sprites son propios y también se han creado con apoyo de OpenAI, Z.ai y PixelLab según el registro del proyecto; audio y música se atribuyen a Google Flow Music y OpenAI según procedencia. Algunos recursos de itch.io están presentes, pero sus páginas de origen y licencias no se localizaron en este pase; el registro de autoría queda pendiente y los créditos no inventan nombres.

## Estado de arte v13.0

La atmósfera de la estación usa carbón, tierra, musgo, pizarra, terracota,
jade y cobre. Los tonos del suelo y la interfaz subieron de luminosidad y
conservan separación para leerse en pantallas oscuras. No se usan colores neón
ni degradados; cada material utiliza colores sólidos y textura pixelada. Los
recuerdos se distinguen por siluetas y objetos además del color. El pelo se tiñe por emoción desde el sprite
original y la sombra de contacto de Nara desaparece.

Para narrar, se toma de **GRIS** la idea de comunicar cambios emocionales por
entorno y color ([Nomada Studio](https://nomada.studio/gris-game/)); de
**Celeste**, la legibilidad de una aventura hecha a mano
([sitio oficial](https://www.celestegame.com/)); y de **Spiritfarer**, la
atención a gestos de cuidado y despedidas ([Thunder Lotus](https://thunderlotusgames.com/games/spiritfarer/)).
La implementación del relay remoto usa el transporte bidireccional descrito
por [MDN WebSocket](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API).
Las referencias guían principios; no se reutilizan sus activos ni sus textos.

---

## 1. Paleta de interfaz y entorno: Atlas de madrugada

La paleta vigente v12.9 combina terracota, jade, lavanda mineral, musgo, pizarra y cobre cálido. Los acentos son colores sólidos, más claros que la guía v12.6 y no neón.

| Papel | Tono representativo |
|---|---|
| Acento principal | Cobre apagado `#bd8067` |
| Acento secundario | Lavanda ceniza `#85889c` |
| Ambiente | Azul tinta y pizarra `#171e29` |
| Texto | Marfil cálido `#e5e0d4` |
| Detalles | Jade gris `#63877f`, piedra fría y cobre |

Las emociones mantienen su identidad cromática dentro del juego; esta guía describe la interfaz y sus acentos. Las sombras y halos se reservan para separar planos y no para simular luz intensa.

## 2. Personaje: Nara (sprite real del autor)

- Origen: GIFs del autor (idle-respiración, corrida 8 frames, salto) en
  vistas este/oeste + hoja de rotaciones de la plantilla.
- Estilo: pixel art 16-bit con contorno oscuro, ojos grandes con brillo.
- Look canónico: pelo castaño ondulado largo, chaqueta azul marino con
  cuello blanco, bufanda roja con franjas amarillas, falda esmeralda,
  leggings azul oscuro, botas marrones.
- En el juego: frames de 40×36 px (baseline 34) renderizados a 1.35×
  (~41 px) sobre un hitbox de 18×26. La ropa se recolorea por ZONAS
  (chaqueta/falda/leggings/bufanda/botas/pelo) — nunca se añaden bordados
  ni capas ajenas; la personalización es recoloreo de la ropa actual +
  gorros discretos (gorra, gorro de lana, flor, corona, aureola).
- Animaciones: idle, run, jump, fall, dash, hurt, crouch, wall, lookup,
  interact (escucha la cinta) y victory (celebración) — las de historia
  se usan en la intro (viñetas) y en la puerta (victory).

### Tinte de pelo por emoción (v12.8)

El sprite y sus proporciones se conservan. El motor PNG busca tonos rojizos
dentro de la región de la cabeza y los reemplaza con los tonos `hair` y
`hairSh` de la emoción activa. IRA conserva el tono cálido original; CALMA usa
azul pizarra, MIEDO lavanda apagada y ALEGRÍA verde musgo. La máscara evita
recolorear la bufanda y el abrigo. No se emplean colores neón. La versión
La integración v13.3 conserva al jugador sin sombra de contacto y retira círculos de aura y
sombras de enemigos/jefes; conserva solo los indicadores circulares que
explican ataques y el tratamiento especial del hermano guía.

## 3. Mundo: estación imposible

- Tiles de 28 px dibujados por código con la emoción del nivel
  (cielo, niebla, tierra y bordes cambian con IRA/CALMA/MIEDO/ALEGRÍA).
- Objetos de estación (sprites RLE): farol de andén (checkpoint), puerta
  corredera de 2 tiles (4 frames de apertura), compuerta metálica, resorte,
  botón de presión, palanca interruptora, cristal frágil (3 etapas de
  grieta), máquina expendedora, bancos, barriles, cajas, carteles,
  engranajes animados y plantas por emoción.
- Tren de fondo: 3 vagones de 108×38 px a velocidad constante por rieles
  bajo el suelo, con ventanas encendidas y humo.
- Fragmentos de memoria: minicasete de píxel sin halo; cada objeto reposa sobre el suelo, agua, resorte o plataforma contextual más cercana.
- Eco fantasma (secretos): espectro lila con faldón ondulante y ojos que
  siguen al jugador.

## 4. Criaturas (8 especies, estilo chibi coherente)

Mismo lenguaje visual que Nara: contorno oscuro, 2 tonos, ojos con brillo.
Las cinco secuencias terrestres usan PNG pixel-art y quedan alineadas por
sus pies, sin sombra elíptica ni círculo de aura. Brasita (fuego
terrestre), Ratico (rata), Gotita (agua), Ferrus (metal), Voltio (chispa
voladora), Pétalo (naturaleza voladora), Hueso (cráneo volador) y Farolín
(criatura baja de musgo con luz cálida; Voltio es ahora una polilla de bobinas y Hueso una polilla espectral con máscara). Farolín reemplaza la antigua silueta
humanoide del Vigía. La v12.2 corrigió claves de paleta en Voltio y Pétalo; la
v12.3 evitó recortes y la v12.4 alinea los PNG terrestres por los pies.

## 5. Jefes

Eco Menor, Guardián del Silencio y La Voz Original tienen rotaciones de ocho
direcciones exportadas desde las hojas fuente del usuario y clips separados
por estado. Los GIF se decodificaron a PNG transparentes para evitar el ciclo
continuo y problemas de composición/disposición. Aviso, ataque, daño y
disolución se disparan al entrar en el estado correspondiente. El juego los
escala para el combate y conserva el dibujo procedural como respaldo. Espejo
Roto mantiene su relicario facetado: no había secuencia nueva de ese jefe.

## 5.1 Criaturas terrestres y secuencias v13.0

Brasita, Gotita, Ferrus, Ratico y Farolín ahora usan cuadros PNG completos recuperados de `assets/enemies/full/`. Las paletas adaptadas conservan contornos nítidos y colores planos. El código usa escalado nearest-neighbor y el mismo anclaje/hitbox. Las tres especies voladoras (Voltio, Pétalo y Hueso) se dejaron intactas.

## 5.2 Carteles de aprendizaje

L2 tiene un cartel junto al resorte y L15 junto a la válvula. E revela una
instrucción breve cuando Nara está cerca. El primero explica la recarga del
doble salto; el segundo explica el orden de válvula, emoción Calma y ascenso
limitado. Ambos postes calculan su apoyo con la superficie sólida del mapa.

## 6. Música (assets/musica/)

Temas originales del autor. Mapa: `menu` Maelstrom Pursuit (Menu Theme) ·
`ira` Maelstrom Pursuit · `calma` farming clavel · `miedo` Maelstrom
Pursuit 2 · `alegria` The Challenge · `secreto` farming clavel (1) ·
`boss` Crusider Fight (Heavier Rhythm) · `finalboss` Belzebu Get DOWN!! ·
`ending` Revenge Song. En v12.9 se añadieron cuatro motivos originales
sintetizados con Web Audio y sin muestras musicales: «Puerta de andén» (jefe),
«Hilo de cinta» (recuerdo), «Vapor ascendente» (caldera) y «Lectura de cartel».

## 7. Inspiraciones

Celeste (plataformas precisas y relato de autoconocimiento), GRIS (emoción
unida a color y habilidades), COCOON (reglas propias por mundo), Animal Well
(secretos), SANABI (narrativa), Neva (vínculo) y Spiritfarer (despedidas y
gestos cotidianos). El HUD y los paneles usan tipografía monoespaciada estilo
terminal de estación. Nara permanece sin cambios.

## 8. Referencias consultadas para v12.2

- [Nomada Studio — GRIS](https://nomada.studio/gris-game/): evolución emocional,
  habilidades y mundo visual.
- [Sitio oficial de Celeste](https://www.celestegame.com/): reto de plataformas
  hecho a mano y viaje personal.
- [Annapurna Interactive — COCOON](https://annapurnainteractive.com/es-419/games/cocoon):
  identidad de mundos y mecánicas que se combinan.
- [Thunder Lotus — Spiritfarer](https://store.steampowered.com/app/972660/Spiritfarer/):
  historias de vínculos, cuidado y despedida.

Se toman como referencias de diseño; no se reutilizan activos ni texto de estos
juegos. Para los diálogos sensibles también se consultaron [CDC: escuchar y
apoyar](https://www.cdc.gov/emotional-well-being/conversations-matter/index.html),
[APA: cuidadores](https://www.apa.org/pi/about/publications/caregivers/practice-settings/intervention/principles.aspx)
y [OMS: primeros auxilios psicológicos](https://www.who.int/publications/i/item/9789241548205).
La escritura se inspira en escucha respetuosa, validación y ayuda práctica; no
diagnostica a los personajes ni presenta el juego como tratamiento.

## 9. Consulta de diseño para v12.3

- [Celeste — sitio oficial](https://www.celestegame.com/): el reto preciso y
  hecho a mano da una referencia para que cada obstáculo enseñe una acción y
  permita intentarlo de nuevo; L19 aplica esa idea con repisas y checkpoints.
- [GRIS — PlayStation](https://www.playstation.com/en-us/games/gris/): describe
  cómo el viaje emocional y las habilidades abren nuevas rutas; inspira el uso
  de color, entorno y mecánicas para expresar la recuperación sin explicarlo
  todo en diálogo.
- [Spiritfarer — Thunder Lotus](https://thunderlotusgames.com/games/spiritfarer/):
  su énfasis en cuidar y acompañar informa los pequeños gestos cotidianos entre
  Nara y su hermano, junto con el tono de despedida y reencuentro.

Estas referencias orientan principios de diseño y empatía; no se reutilizan
activos, personajes ni texto. Ver [ACTUALIZACION_v13.0.md](ACTUALIZACION_v13.0.md)
para cambios actuales de personaje, escenas, boss, niveles y co-op remoto, además de
[ACTUALIZACION_v12.3.md](ACTUALIZACION_v12.3.md) para combate y presentación, y
[ACTUALIZACION_v12.2.md](ACTUALIZACION_v12.2.md) para la evolución narrativa.

### Referencias de puesta en escena v13.0

- [GRIS / entrevista a Nomada Studio](https://www.vice.com/en/article/nomada-studio-lets-me-in-to-learn-how-gris-and-neva-deliver-a-beautiful-and-touching-message-interview/): narración visual y elipsis para que los gestos, el entorno y el color lleven parte de la historia.
- [Oxenfree: conversación en movimiento](https://www.gamesradar.com/interrupt-dialogue-in-oxenfree-makes-conversations-feel-natural/): conversaciones que continúan mientras los personajes se desplazan y atienden el entorno.

Se toman como referencias de ritmo y legibilidad para las nuevas viñetas; no se copian recursos, personajes, diálogos ni música.

