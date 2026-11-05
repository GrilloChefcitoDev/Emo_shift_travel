# EMO-SHIFT TRAVEL — Manual completo del juego

**Edición de referencia: v13.14 · octubre de 2026**
**Estudio:** Grillo Studio · **Concepto e historia:** Jhon Didier Urbano Hernandez

Esta guía cubre la versión integrada v13.14: historia, controles, progresión, niveles, reglas, combate, inventario, tienda, guardado, cooperativo y referencia técnica. El código vigente es la autoridad final sobre valores y comportamiento. El juego en red sigue siendo un prototipo.

> **Aviso de contenido y spoilers:** hay referencias a una crisis suicida, hospitalización, violencia doméstica, enfermedad, cansancio y conflictos familiares. No se muestran métodos de autolesión ni agresiones explícitas. Las secciones de historia y finales revelan la trama.

## Índice

1. [Ficha del juego](#ficha-del-juego)
2. [Cómo iniciar y guardar](#cómo-iniciar-y-guardar)
3. [Historia](#historia)
4. [Personajes](#personajes)
5. [Controles](#controles)
6. [Movimiento y combate](#movimiento-y-combate)
7. [Las cuatro emociones](#las-cuatro-emociones)
8. [Objetos y reglas del mundo](#objetos-y-reglas-del-mundo)
9. [Niveles, campaña y secretos](#niveles-campaña-y-secretos)
10. [Enemigos y jefes](#enemigos-y-jefes)
11. [Vida, tienda e inventario](#vida-tienda-e-inventario)
12. [Recuerdos, progreso y logros](#recuerdos-progreso-y-logros)
13. [Finales](#finales)
14. [Cooperativo y juego en red](#cooperativo-y-juego-en-red)
15. [Interfaz, arte y audio](#interfaz-arte-y-audio)
16. [Ficha técnica](#ficha-técnica)
17. [Verificación y límites](#verificación-y-límites)
18. [Créditos y documentos](#créditos-y-documentos)
19. [Archivo histórico](#archivo-histórico)

## Ficha del juego

- **Género:** plataformas 2D de acción, exploración y aventura narrativa.
- **Formato:** HTML, CSS, JavaScript y Canvas 2D; ejecución en navegador.
- **Protagonista:** Nara.
- **Estructura:** campaña ramificada, recuerdos secretos, criaturas y cuatro jefes principales.
- **Resolución lógica:** 960 × 540 px; tiles de 28 × 28 px.
- **Contenido:** 27 mapas en cuadrícula de 120 × 18 tiles (21 mapas de campaña/ruta y 6 secretos).
- **Tono:** íntimo y esperanzador. La fantasía del Andén Cero representa recuerdos de Nara, no un diagnóstico ni la mente de Tomás.
- **Dirección creativa vigente:** conservar el diseño y las mecánicas centrales de Nara; usar pixel-art, colores no neón y evitar degradados en la dirección visual.

## Cómo iniciar y guardar

1. Abre `index.html` en Chrome, Edge o Firefox moderno.
2. Inicia una partida y selecciona un nivel desbloqueado en el mapa.
3. Haz clic o pulsa una tecla si el navegador requiere interacción para activar audio.

La campaña local no necesita servidor ni instalación. El progreso se guarda en el almacenamiento local del navegador, no en una cuenta. Cambiar de navegador, perfil o dispositivo no transfiere automáticamente la partida; borrar los datos del sitio puede eliminarla. En pausa, **Reiniciar nivel** reinicia el mapa actual y **Volver al menú** sale de la partida; ninguna de esas opciones equivale a borrar toda la partida.

El guardado valida sus campos y migra formatos antiguos conocidos. Los controles reasignados también se guardan localmente.

## Historia

### Prólogo: la sala de espera

Nara espera noticias de su hermano Tomás en un hospital. Él está vivo y recibe atención profesional después de una crisis que puso su vida en peligro. Su madre llevó mandarinas. El reloj y una máquina de café acompañan el silencio. En el bolsillo de Nara aparece una cinta vieja con la letra de su hermano. Al reproducirla, el clic del aparato se mezcla con el reloj y el hospital se transforma en una estación imposible.

### El Andén Cero

El Andén Cero es el mundo interior de Nara, formado por recuerdos, miedos y preguntas sin resolver. No es una prueba que ella tenga que superar para curar a Tomás. La figura que la guía, el **Recuerdo de Tomás**, nace de bromas, gestos y momentos que compartieron. Puede acompañarla por la memoria, pero no conoce el presente ni habla por el Tomás real.

De niños, Nara y Tomás compartían viajes en bus, mandarinas y una cinta que se trababa. En casa también aprendieron a reconocer pasos detrás de una puerta. La violencia que sufrió su madre se sugiere con puertas cerradas, silencios y rutinas alteradas; no se muestra como espectáculo. Su madre intenta protegerlos y luego encuentra una vida más segura, aunque las huellas emocionales permanecen.

Con los años, la madre enferma. Citas, cuentas, transporte, trabajo y cuidados empiezan a ocupar la mesa familiar. Tomás toma turnos y trata de no añadir preocupaciones a las de Nara. Ella ve una silla vacía y mensajes sin respuesta, pero no ve el turno agotador que él acaba de terminar. Ambos interpretan el silencio desde su dolor. La historia reconoce que esas ausencias lastiman sin convertirlas en prueba de que dejaron de quererse.

### El recorrido de Nara

En estaciones, canales, archivos, jardines y recuerdos, Nara encuentra ecos que repiten interpretaciones incompletas: “me dejó”, “debí haberlo sabido”, “si no lo arreglo yo, nadie lo hará”. No son villanos humanos ni diagnósticos; son pensamientos que parecen ciertos cuando se repiten.

El Espejo Roto multiplica los movimientos de Nara y devuelve acusaciones que ninguno de los hermanos pudo comprobar. Ella aprende a reconocer a la vez que la ausencia le dolió y que no conocía los turnos, la vergüenza y el agotamiento de Tomás. Dos personas pueden recordar distinto sin que una esté mintiendo.

En los recuerdos pequeños quedan el café, las historias inventadas para otros pacientes, las monedas del bus y una mandarina compartida. Los momentos buenos no borran los malos; ambos forman parte de la vida que Nara quiere conservar.

### Epílogo

La última cinta no promete una solución mágica. Tomás dice que, si algún día Nara quiere hablar, pueden empezar con un “hola”. El Recuerdo de Tomás deja de hablar por el presente: ese lugar les pertenece a los dos hermanos reales, si ambos quieren ocuparlo.

Nara vuelve al hospital y le pide a tía Clara que la acompañe a llamar. No promete que todo estará bien ni exige una explicación inmediata. La recuperación de Tomás continúa con profesionales, tiempo y una red de apoyo. El gesto final es pequeño: abrir la posibilidad de conversar otra vez.

La historia completa con escenas, diálogos y recuerdos está en [GUION_HISTORIA_COMPLETA.md](docs/GUION_HISTORIA_COMPLETA.md).

### Tratamiento de temas sensibles

La crisis de Tomás no se atribuye a una causa única y no se describe cómo ocurrió. Nara no es responsable de prevenirla ni curarla. El amor familiar puede acompañar, pero no sustituye la atención profesional. La violencia doméstica se aborda desde sus efectos y la seguridad, no con imágenes explícitas. La historia trata límites, cuidado cotidiano, agotamiento, comunicación y esperanza sin prometer una recuperación lineal.

## Personajes

| Personaje | Papel |
|---|---|
| **Nara** | Protagonista. Aprende a nombrar el dolor, observar sus interpretaciones y aceptar compañía. |
| **Tomás** | Hermano mayor. En el presente está hospitalizado y recibe cuidado profesional. |
| **Recuerdo de Tomás** | Guía creada a partir de las memorias de Nara; no reemplaza al hermano real. |
| **Mamá** | Madre de ambos. Tiene afecto, humor y autonomía; sobrevivió una relación violenta y atravesó una enfermedad. |
| **Tía Clara** | Familiar cercana que acompaña a Nara a iniciar la llamada. |
| **Ecos** | Criaturas y voces que encarnan recuerdos, temores o interpretaciones parciales. |

## Controles

### Jugador 1

| Acción | Tecla predeterminada |
|---|---|
| Mover a izquierda / derecha | A / D |
| Mirar arriba | W |
| Agacharse / bajar | S |
| Saltar | Espacio |
| Dash | Shift |
| Interactuar, hablar o usar tienda | E |
| Emoción Ira / Calma / Miedo / Alegría | 1 / 2 / 3 / 4 |
| Pausa | Esc |
| Reaparecer en el checkpoint | R |
| Abrir/cerrar inventario | Tab o I |
| Usar poción rápidamente | P |

Desde **Pausa → Cambiar controles** se reasignan teclas. Los cambios persisten en el navegador y el sistema evita dejar duplicada la misma tecla en dos acciones del jugador.

### Jugador 2 (cooperativo local)

| Acción | Tecla predeterminada |
|---|---|
| Moverse | Flechas izquierda / derecha |
| Mirar arriba / bajar | Flechas arriba / abajo |
| Saltar | Enter |
| Dash | Numpad / |
| Interactuar | Coma |
| Emociones | Numpad 1 / 2 / 3 / 4 |
| Reaparecer | Numpad 0 |

La presencia del segundo jugador depende del modo cooperativo local. Al terminar esa sesión, el juego restablece el estado para que una partida individual no conserve por error el segundo avatar. Algunas teclas requieren teclado numérico.

## Movimiento y combate

El movimiento combina aceleración, fricción, control aéreo, gravedad, salto variable, tolerancia breve para saltar tras abandonar un borde, memoria de pulsación antes de aterrizar, deslizamiento y salto de pared.

- **Salto:** pulsa Espacio; soltarlo durante el ascenso reduce la altura.
- **Doble salto:** con Alegría, vuelve a pulsar salto en el aire.
- **Dash:** con Ira, Shift impulsa en la dirección en la que mira Nara. Shift + W dirige el dash hacia arriba; Shift + S hacia abajo. Tiene enfriamiento y daña enemigos y jefes.
- **Resorte:** el contacto produce automáticamente un rebote alto (alrededor de seis tiles, según condiciones), sin tener que mantener Espacio. Tiene límite y una cadena de impulsos controlada.
- **Agua y vapor:** Calma convierte el agua `W` en superficie y ralentiza la caída. Al calentar una válvula `V` con Ira y cambiar a Calma aparece vapor ascendente, con altura limitada de unos seis tiles.
- **Daño:** enemigos, ataques y pinchos reducen vida. Los checkpoints marcan la reaparición del nivel.
- **Estrategia:** la velocidad del dash no significa invulnerabilidad permanente. Lee el aviso del ataque y busca la ventana segura.

Parámetros base de referencia: velocidad horizontal 3.8 px/frame, salto inicial −10.8, gravedad 0.55, dash 9.8 durante 10 frames y enfriamiento de 26 frames. Son valores internos que pueden depender del ritmo de actualización del navegador.

## Las cuatro emociones

Las emociones son herramientas para leer el escenario. Cambian con 1–4 y el cabello de Nara adopta un color guía para hacer visible el poder activo.

| Emoción | Color guía | Función |
|---|---|---|
| **Ira** | Terracota | Dash ofensivo; rompe barreras `B` y calienta válvulas `V` con dash o movimiento rápido. La carrera es un poco más veloz. |
| **Calma** | Verde azulado | Flota sobre `W`, reduce la velocidad de caída y activa el vapor de válvulas ya calientes. |
| **Miedo** | Lavanda apagado | Revela plataformas `H`; la mejora Visión Miedo amplía el radio. |
| **Alegría** | Ocre / verde bosque | Habilita doble salto y aprovecha corrientes de viento `^`. |

Cada poder tiene límites; ninguna emoción reemplaza observar el nivel.

## Objetos y reglas del mundo

| Marca del mapa | Significado |
|---|---|
| `.` | Aire / espacio vacío. |
| `#` | Bloque sólido o suelo. |
| `B` | Barrera rompible con dash de Ira. |
| `H` | Plataforma oculta que Miedo revela. |
| `Y` | Cristal frágil que se rompe tras permanecer sobre él. |
| `G` | Compuerta que abre su botón asociado. |
| `O` | Botón de presión. |
| `Z` | Interruptor relacionado con emoción. |
| `J` | Resorte de impulso alto. |
| `W` | Agua; Calma puede sostener a Nara en la superficie. |
| `^` | Corriente ascendente de viento para Alegría. |
| `V` | Válvula: Ira la calienta y Calma activa el vapor. |
| `X` | Pinchos. |
| `F` | Fragmento de memoria opcional. |
| `C` | Checkpoint, representado por farol. |
| `E` | Punto de aparición de criatura según configuración del nivel. |
| `T` | Farol decorativo. |
| `P` | Punto de aparición de Nara. |
| `D` | Puerta de salida. |
| `M` | Máquina expendedora / tienda. |
| `Q` | Personaje hermano/NPC de recuerdo en los mapas que lo incluyen; interactúa cerca con E cuando la escena lo permite. |

La decoración de fondo puede no tener colisión ni ser interactiva. La presencia de arte no significa que haya un objeto utilizable.

## Niveles, campaña y secretos

El mapa organiza capítulos en un recorrido ramificado. `LEVEL_NEXT` define desbloqueos; el orden visual del selector solo organiza su presentación. Al finalizar, se registra el avance, aparece el cierre narrativo del nivel y vuelve la selección. Solo L12 finaliza la campaña principal.

### Campaña y rutas

| ID | Nivel | Contexto narrativo |
|---|---|---|
| L1 | **Andén Cero** | Entrada al mundo de recuerdos. |
| L2 | **Vías Olvidadas** | El último tren de la noche. |
| L3 | **Eco Menor** | Primer jefe y primer gran eco hostil. |
| L4 | **Estación Marea** | Aguas que recuerdan; uso de Calma. |
| L5 | **Cavernas Reflectantes** | La bóveda de lluvia. |
| L6 | **Guardián del Silencio** | Segundo jefe y apertura de recorridos. |
| L15 | **Depósito de Agua** | Memoria familiar y vapor. |
| L17 | **Cámaras de Control** | Recuerdo sobre control y manipulación. |
| L18 | **Pasillo de lo No Dicho** | Consecuencias de las conversaciones aplazadas. |
| L7 | **Voltaje Nocturno** | Archivo de cosas no dichas y mensajes pendientes. |
| L8 | **Pasillo Inverso** | Convergencia de emociones e interpretaciones. |
| L9 | **Espejo Roto** | Tercer jefe; las acusaciones que Nara asumió. |
| L10 | **Brisa Alta** | Respiro entre turnos y rutas alternativas. |
| L13 | **Estación Espejo** | Ruta de acertijos y reflejos; regresa a L10. |
| L16 | **Jardín de Vuelta** | Ruta de viento y plataformas; converge en L11. |
| L11 | **Cumbre Tormentosa** | Convergencia y preparación del cierre. |
| L14 | **Vía del Cielo** | Ruta aérea de resortes y corrientes; conecta con L12. |
| L19 | **Descenso de lo Pendiente** | Un paso a la vez; ruta principal, descansos y checkpoints. |
| L20 | **Sala de Espera** | Recuerdos de cuidado y vida cotidiana. |
| L21 | **La Llamada que Sí Llega** | Posibilidad de volver a escuchar; conecta con L12. |
| L12 | **La Voz Original** | Cuarto jefe y final de campaña. |

Ruta resumida: `L1 → L2 → L3 → L4 → L5 → L6 → (L15 o L17 → L18) → L7 → L8 → L9 → (L10 o L13 → L10) → (L11 o L16 → L11) → (L12 o L14 → L12 o L19 → L20 → L21 → L12)`. Los desvíos amplían la historia, pero el final A está disponible por la ruta principal.

### Niveles secretos

| ID | Nombre | Desbloqueo / retorno |
|---|---|---|
| S1 | **Habitación 0** | Al completar al menos 6 niveles principales; al salir vuelve a L1. |
| S2 | **Vacío Eterno** | Tras L12; nivel secreto posterior al final, regresa a L12. |
| S3 | **Andén Negativo** | Tras L6; regresa a L1. |
| S4 | **La Última Cinta** | Tras L9; regresa a L12. |
| S5 | **Raíces del Prisma** | Tras L9; regresa a L9. |
| S6 | **Hoyo Negro** | Tras L12; arena opcional que vuelve al selector, no es final de campaña. |

Los seis secretos tienen cierre narrativo y cuentan para el logro de exploración completa. El mapa de selección muestra desbloqueos disponibles.

## Enemigos y jefes

Las criaturas son ecos, no personas. Hay ocho especies de sprites pixel-art direccionales: **Brasita, Gotita, Voltio, Pétalo, Ferrus, Hueso, Ratico y Farolín**. Incluyen variantes terrestres y voladoras, con siluetas y desplazamientos distintos. La orientación del sprite acompaña el movimiento. La mayoría puede evitarse saltando o dañarse con dash de Ira; el contacto puede hacer daño. Los enemigos voladores se colocan a alturas alcanzables. La vida y patrón particular dependen de la configuración de cada mapa.

Los jefes avisan sus ataques; usa el dash de Ira para hacer daño, buscando una ventana de recuperación.

| Jefe | Nivel | Vida de referencia | Patrón y consejo |
|---|---|---:|---|
| **Eco Menor** | L3 | 8 | Tres fases: abanico dirigido, ataque radial y rayos con proyectiles. Esquiva el aviso y contraataca. |
| **Guardián del Silencio** | L6 | 14 | Golpe al suelo con ondas saltables, carga anunciada y pilares con anillos. Los pilares se pueden romper con dash. |
| **Espejo Roto** | L9 | 6 | Copias que imitan con retraso y se preparan antes de lanzarse. Se desplaza a un flanco cercano de forma pautada; el TP no es aleatorio sin aviso. No recibe daño durante el TP. Dash en reposo o en la recuperación de 72 frames. |
| **La Voz Original** | L12 | 20 | Cuatro fases que combinan proyectiles, golpe al suelo, copias/teletransporte y patrones mixtos. Lee el ataque antes de buscar la oportunidad de dash. |

## Vida, tienda e inventario

### Salud y dificultad

Los corazones pixel-art representan la vida y cambian visualmente al recibir daño. Al agotarse la salud, Nara reaparece en el último checkpoint, salvo que una Vida Extra se active.

| Dificultad | Vida inicial | Velocidad enemiga | Checkpoints |
|---|---:|---:|---|
| Fácil | 5 | 0.7× | Frecuentes |
| Normal | 3 | 1× | Regulares |
| Difícil | 2 | 1.3× | Menos frecuentes |

### PTS y tienda

Completar un nivel entrega 30 PTS; desbloquear un logro entrega 20 PTS. Las máquinas `M` venden mejoras, suministros y cosméticos.

Las mejoras progresivas tienen estos topes: alcance del dash 3 niveles, enfriamiento del dash 3, doble salto 3, caída lenta 3, radio de visión de Miedo 2 y vida máxima 3. La máquina muestra el precio y el estado del artículo antes de comprarlo.

| Artículo | Precio | Efecto |
|---|---:|---|
| Dash +alcance | 80 | Aumenta el recorrido de Ira. |
| Dash recarga | 80 | Reduce el enfriamiento del dash. |
| Doble salto +alto | 90 | Aumenta el impulso de Alegría. |
| Caída lenta+ | 70 | Extiende la duración de la caída lenta de Calma. |
| Visión Miedo+ | 90 | Aumenta el radio de revelación de plataformas ocultas. |
| +Vida máxima | 120 | Añade un punto de vida permanente, dentro del límite de mejora. |
| Poción | 30 | Restaura toda la vida; tecla P o inventario. |
| Escudo | 50 | Absorbe el siguiente golpe automáticamente; un uso. |
| Vida extra | 100 | Reaparece con vida plena al morir; un uso. |
| Bufanda Púrpura | 60 | Accesorio cosmético. |
| Bufanda Nieve | 80 | Accesorio cosmético claro. |
| Gorro de lana | 50 | Accesorio cosmético. |
| Flor | 80 | Accesorio para el cabello. |
| Buzo del andén | 100 | Atuendo cosmético. |

El inventario se abre con Tab o I. El escenario sigue visible, pero la simulación se congela. Flechas cambian selección; Enter o Espacio confirma; Esc, Tab o I cierra. La poción se activa desde su ranura o con P. Escudo y Vida Extra son pasivos y no necesitan clic.

## Recuerdos, progreso y logros

Los fragmentos `F` son opcionales. Se suman al contador de memoria; los faroles `C` guardan el checkpoint del nivel. Terminar un mapa registra el avance y abre nodos siguientes. Los recuerdos narrativos se consultan desde el archivo correspondiente del menú.

La edición incluye 22 logros: **Primer recuerdo** (primer fragmento), **Primer paso** (primer nivel), **Cazador de ecos** (primer jefe), **Intocable** (nivel sin morir), **Coleccionista** (todos los fragmentos de un nivel), **Explorador** (hallar secreto), **Maestro del viaje** (todos los niveles), **Velocista** (nivel bajo 90 s), **Perfeccionista** (todas las mejoras), **Reencuentro** (completar juego), **Sin una marca** (jefe sin recibir daño), **Domador de ecos** (cuatro jefes), **Caminante** (una ruta alternativa), **Cartógrafo** (dos rutas), **Secretista** (seis secretos), **Impulso** (diez resortes), **Demolidor** (quince cristales frágiles), **Mente abierta** (cinco botones), **Cazador de sombras** (treinta criaturas con dash), **Resistente** (caer veinte veces y seguir), **Memoria total** (cien fragmentos totales) y **Todas las despedidas** (ver los tres finales).

## Finales

El desenlace se calcula al terminar L12 y el juego registra cada uno para el logro **Todas las despedidas**.

| Final | Condición | Cierre |
|---|---|---|
| **A · Reencuentro** | Ruta principal, sin ruta alternativa ni secreto completado. | Nara pide a tía Clara que la acompañe a llamar; Tomás responde que recibe ayuda y quiere hablar despacio. |
| **B · El Andén Olvidado** | Se completó L13 o L14, o cualquier secreto, pero no se cumple C. | Otra cinta recuerda la sala de espera; los hermanos reconocen la distancia y dejan abierta la conversación. |
| **C · Resonancia Perfecta** | Se completaron L13 y L14, además de S1. | La familia acepta que no tiene que resolverlo todo hoy y acuerda seguir acompañándose. |

No se afirma que una llamada cure a Tomás ni que el dolor desaparezca. El cuidado y la recuperación continúan después del cierre.

## Cooperativo y juego en red

### Cooperativo local

Dos jugadores pueden compartir equipo y teclado con los esquemas de controles de Jugador 1 y Jugador 2. El modo se establece explícitamente al elegir co-op y se cierra al volver al menú o pulsar JUGAR. No queda guardado entre sesiones. Si una conexión de red antigua avisa que se cerró después de iniciar otra, se ignora para preservar la sesión vigente.

### Red (prototipo experimental)

El proyecto incluye un relay WebSocket con salas y roles de anfitrión/invitado. Se configura una URL `ws://` o `wss://`, un código de sala de 4–16 caracteres (A–Z, números, guion y guion bajo) y el rol de conexión. Es solo un prototipo de transporte de estado de avatar. **No sincroniza combate, enemigos, colisiones autoritativas, progreso, objetos ni guardado compartido**; no constituye todavía un modo en línea completo.

## Interfaz, arte y audio

- **Mapa:** recorrido por capítulos con rutas y secretos; solo se seleccionan fichas disponibles.
- **Pausa (Esc):** reanudar, opciones, cambiar controles, reiniciar nivel o volver al menú. Las instrucciones viven aquí para liberar espacio en pantalla.
- **Inventario (Tab/I):** panel translúcido sobre el escenario que congela el mundo.
- **Tienda (E cerca de M):** categorías y confirmación de compra con PTS.
- **Interacción (E):** habla con personajes o activa elementos cercanos cuando el nivel lo permite.
- **Opciones:** audio, visualización y reducción de efectos ambientales según disponibilidad.

### Estándar tipográfico v13.12

La interfaz comparte tokens en `css/styles.css` para poder pedir un cambio por nombre en vez de describir cada pantalla: `caption` 12 px (metadatos), `label` 13 px (etiquetas), `ui` 14 px (controles y opciones), `body` 16 px (texto corriente), `dialogue` 19 px (conversación), `heading` 22 px (títulos de panel) y `display` 32 px (pantallas principales). Las reglas de diálogo aplican 20 px en la resolución de referencia. La tipografía pixel se reserva para títulos cortos y etiquetas; los párrafos usan la fuente de lectura. En móvil se permite reducir un paso cuando la composición lo exige.

### Mapa, inventario, tienda y créditos v13.12

El selector organiza tarjetas por capítulo y tramo en una cuadrícula, no en posiciones aleatorias. El inventario muestra tres objetos en tarjetas grandes con el mundo todavía visible; abrirlo congela la partida. La tienda exterior es una caseta de recuerdos y la interior separa Mejoras, Suministros y Recuerdos, mostrando coste y estado del objeto. Los créditos vuelven a sus apartados previos y ruedan de arriba abajo con pausa al interactuar; rueda, tacto, arrastre y teclado permiten explorar todo el contenido hacia ambos sentidos.

### Lectura de mapas y cinemáticas v13.12

Los trazados jugables combinan perfiles distintos de terrazas, huecos y desvíos opcionales. L19 conserva un plano dedicado con saltos de distinto ritmo, checkpoints, una barrera central y una ruta alta opcional. En L17 las válvulas quedan en dos estaciones separadas. El validador recorre la conectividad estática, pero no garantiza cada salto en tiempo real. Las escenas tienen menos utilería repetida: la cantidad de ventanas, mesa y objetos cambia según el lugar; los cierres conservan su utilería específica. Tomás se dibuja sin placa rectangular ni halo circular.

El arte combina pixel-art, fachadas y parallax urbano con motivos diferentes para andenes, canales, archivos, azoteas, jardines y hospital. Los detalles del cielo y el fondo dan escala sin ocultar plataformas y amenazas. La paleta usa colores terrosos, vegetales, azulados y cálidos, sin neón ni degradados. Las criaturas tienen sprites direccionales; la decoración no necesariamente tiene colisión. Las cinemáticas integran los subtítulos al encuadre y varían utilería, escenario y ritmo. Los recuerdos se apoyan en lugares cotidianos; las escenas de jefe usan fondos propios. Tomás se representa con su sprite, no con otra instancia de Nara.

Los diálogos de campaña, recuerdos, jefes y desenlaces se revisaron para usar frases más breves y concretas. Nara puede expresar dudas y dolor sin que la escena se convierta en una explicación de las mecánicas. Las ayudas de nivel siguen dando instrucciones directas. Los planos tienen movimiento de cámara propio y suave por escenario, sin zoom repentino entre líneas; la utilería se reserva para recuerdos donde cumple un propósito. El [informe de referencias y cambios de cinemática](docs/MEJORA_CINEMATICAS_REFERENCIAS_2026-10-30.md) registra las observaciones de Celeste, Hollow Knight y el video de diseño.

El sonido se habilita tras una interacción del navegador. La tipografía Silkscreen incluida se distribuye con SIL Open Font License 1.1, cuya copia está en `assets/fonts/OFL-Silkscreen.txt`. Los recursos externos de itch.io necesitan revisar autor y licencia antes de redistribuir el proyecto.

## Ficha técnica

El juego estático abre desde `index.html`; no hace falta compilar para ejecutar campaña local.

| Archivo / módulo | Responsabilidad |
|---|---|
| `index.html` | Entrada, canvas, interfaz y orden de carga. |
| `css/` | Tipografía, menús, HUD, mapa, pausa, tienda e inventario. |
| `js/01_config.js`–`04_palettes.js` | Constantes, dificultad y paletas. |
| `js/05_levels.js` | Mapas y grafo `LEVEL_NEXT`. |
| `js/06_game_state.js` | Estado, guardado, economía y logros. |
| `js/07_player.js` | Física y habilidades centrales de Nara. |
| `js/08_tiles.js` | Tiles, colisiones e interacciones. |
| `js/09_world_art.js`, `14_render.js` | Arte ambiental y render. |
| `js/10_boss.js` | Lógica y daño de jefes. |
| `js/15_level_manager.js`, `19_game_loop.js` | Carga, actualización y cierre de nivel. |
| `js/16_cinematics.js`, `30_memory_cinematics.js`, `34_boss_intro_cinematics.js` | Prólogo, recuerdos, escenas y cierres. |
| `js/18_input.js`, `22_controls_remap.js` | Entrada y reasignación de controles. |
| `js/29_shop.js`, `33_inventory.js` | Tienda e inventario. |
| `js/35_boss_sprites.js`, `36_enemy_sprites.js` | Sprites de jefes y criaturas. |
| `js/37_online_multiplayer.js`, `server/` | Relay experimental de red. |
| `assets/` | Sprites, fuentes, iconos y audio. |
| `dev/validate_levels_v9.py` | Validación BFS de mapas en solo lectura. |

El guardado principal usa la clave local `emoShift_v9_save` (estructura de guardado versión 6); los controles usan `emoShift_controls_v3`. No son servicios en la nube: pertenecen al almacenamiento del navegador actual.

## Verificación y límites

La revisión v13.12 registra sintaxis correcta en los 46 módulos JavaScript, alcanzabilidad estática de 27/27 mapas y 15/15 comprobaciones automatizadas de la suite heredada en navegador. La suite cubre también el resorte tutorial. La selección de dificultad y tres composiciones narrativas se capturaron en Chrome a 1280×800; se revisaron visualmente. L14 aparece como nivel que requiere habilidades, por diseño. Las pruebas estáticas no garantizan todas las colisiones, saltos, animaciones, periféricos ni equipos.

La edición v13.14 es una revisión de procedencia del ZIP v13.5; no modifica el runtime. Los recursos comparados ya estaban integrados. La hoja CSS y el módulo de interfaz sí funcionaban dentro de aquella versión antigua del ZIP, pero no se trasladaron a esta base porque dependen de su DOM previo y recuperan gradientes, fuentes remotas y una estructura de mapa menos legible por capítulos. Consulta [la revisión del ZIP](docs/REVISION_ZIP_v13.5.md).

La misma edición documenta ajustes a transición y cierres de nivel, continuidad de finales, orientación de Ratico, sprites de La Voz Original, soporte de pickups/NPCs, L19, resortes de L2/L10, inventario, pausa, tienda y fondo urbano. Consulta el [informe v13.12](docs/ACTUALIZACION_v13.12.md), la [comparación de versiones](docs/AUDITORIA_COMPARATIVA_v13.12.md), y los informes [v13.11](docs/ACTUALIZACION_v13.11.md), [v13.10](docs/ACTUALIZACION_v13.10.md), [seguimiento del prompt maestro](docs/AUDITORIA_PROMPT_MAESTRO_2026-10-30.md), [revisión de capturas](docs/REVISION_CAPTURAS_2026-10-30.md) y [mejora de diálogos y cinemáticas](docs/MEJORA_CINEMATICAS_REFERENCIAS_2026-10-30.md) para alcance e historial.

Límites de producto conocidos:

- El relay en red no sincroniza simulación de combate ni progreso.
- El guardado es local al navegador; no existe sincronización en la nube.
- El validador no sustituye jugar cada recorrido y patrón de jefe manualmente.
- Algunos recursos de itch.io todavía requieren confirmar atribución y licencia para su publicación o redistribución.

## Créditos y documentos

- **Concepto, mundo e historia:** Jhon Didier Urbano Hernandez.
- **Desarrollo asistido:** OpenAI y Z.ai, según los créditos del proyecto.
- **Arte y sprites:** autor del proyecto y herramientas de creación; algunos recursos externos aún requieren atribución/licencia verificadas.
- **Tipografía:** Silkscreen, OFL 1.1.
- **Audio:** piezas producidas para el proyecto; consultar su registro en la documentación de edición.

Documentación complementaria:

- [Guion de historia completo](docs/GUION_HISTORIA_COMPLETA.md)
- [Cómo funciona el juego](docs/COMO_FUNCIONA_EL_JUEGO.md)
- [Revisión de recursos del ZIP v13.5](docs/REVISION_ZIP_v13.5.md)
- [Informe v13.10](docs/ACTUALIZACION_v13.10.md)
- [Revisión de errores de capturas](docs/REVISION_CAPTURAS_2026-10-30.md)
- [Revisión de cinemáticas y orientación](docs/REVISION_CINEMATICAS_Y_ORIENTACION_2026-10-30.md)
- [Mejora de diálogos y cinemáticas](docs/MEJORA_CINEMATICAS_REFERENCIAS_2026-10-30.md)
- [Referencias visuales y atribución](docs/REFERENCIAS_Y_ARTE.md)
- [Core loop para reunión](CORE_LOOP_REUNION.md)

## Archivo histórico

El manual previo acumulaba datos de varias versiones y algunos ya no describían v13.9. Se conserva íntegro en [docs/MANUAL_ARCHIVO_PRE_v13.9.md](docs/MANUAL_ARCHIVO_PRE_v13.9.md). Usa este manual como referencia vigente y contrasta los detalles técnicos con el código.

