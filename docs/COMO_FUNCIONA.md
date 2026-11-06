# Cómo funciona EMO-SHIFT TRAVEL · v13.14

Resumen técnico vigente de la copia de trabajo. Para la historia, consulta el [guion](GUION_HISTORIA_COMPLETA.md); para esta auditoría, [revisión del ZIP v13.5](REVISION_ZIP_v13.5.md), [informe v13.12](ACTUALIZACION_v13.12.md), [comparación de versiones](AUDITORIA_COMPARATIVA_v13.12.md), [informe v13.11](ACTUALIZACION_v13.11.md) y [revisión de capturas](REVISION_CAPTURAS_2026-10-30.md); para referencia extensa e histórica, [manual completo](../MANUAL_COMPLETO_DEL_JUEGO.md).

Las cinemáticas (`cinematic`, `story` y `bossIntro`) se renderizan sin un segundo jugador dibujado debajo de la viñeta. Para manifestar a la proyección del hermano, las escenas usan su sprite propio, no una segunda instancia de Nara. Los recuerdos tienen ambientes propios; las conversaciones integran subtítulos al plano y las intros de jefes varían escenario. Los diálogos y textos de nivel se revisaron para sonar más cercanos, sin quitar las instrucciones necesarias.

## Arquitectura

Juego HTML5, CSS y JavaScript con Canvas 2D. Abre `../index.html` en un navegador moderno; la campaña local no requiere servidor. Los módulos se cargan en orden desde `index.html`.

| Módulo | Responsabilidad |
|---|---|
| `js/01_config.js`–`04_palettes.js` | constantes, emociones y paletas |
| `js/05_levels.js`, `06_game_state.js` | datos de niveles, progresión y estado guardado |
| `js/05c*_*.js`, `js/35_boss_sprites.js`, `js/36_enemy_sprites.js` | sprites y carga de recursos |
| `js/07_player.js`, `08_tiles.js`, `10_boss.js` | lógica del jugador existente, colisiones de tiles y jefes |
| `js/09_world_art.js`, `14_render.js`, `19_game_loop.js` | dibujo y actualización del mundo |
| `js/15_level_manager.js`, `20_screens.js` | carga, finalización de nivel, mapa y pausa |
| `js/16_cinematics.js`, `30_memory_cinematics.js`, `34_boss_intro_cinematics.js` | prólogo, diálogos, cierres y escenas de jefe |
| `js/03_controls.js`, `18_input.js`, `22_controls_remap.js`, `33_inventory.js` | entrada, reasignación e inventario |

## Fondo urbano

`drawBackground()` llama a `drawCityBackdrop()` en `js/14_render.js`. La capa lejana y las fachadas cercanas usan desplazamientos parallax distintos; un tercer plano añade el viaducto/tranvía. `cityDistrict(world)` elige motivos ambientales por mundo. `cityRand()` mantiene patrones estables al avanzar la cámara. Los colores mezclados pueden procesarse como hex o rgb, y la opción de reducir efectos limita motas/luces sin quitar el decorado.

## Core loop

1. Explorar el recuerdo y observar el espacio.
2. Interpretar la pista u obstáculo.
3. Elegir emoción y superar la situación.
4. Recuperar fragmentos opcionales, escuchar un recuerdo y avanzar.

El avance vuelve a la exploración en un entorno con otra historia y composición. Las emociones del jugador mantienen sus reglas: Ira/dash, Calma/agua y vapor, Miedo/plataformas ocultas, Alegría/doble salto y viento. Los cambios hasta v13.10 no alteran los controles o la física del jugador.

## Niveles y cierre

`LEVELS` contiene 27 mapas 120×18 y `LEVEL_NEXT` declara la progresión. `LEVEL_SELECT_ORDER` ordena la vista; no desbloquea niveles. Al completar un nivel, `completeLevel()` registra el avance y llama al cierre narrativo correspondiente; su callback regresa a selección. Solo `isCampaignFinal` abre el cierre final: L12 tiene ese indicador y conserva `isFinal` para la música y las fases del jefe; la arena secreta S6 ya no se confunde con el final de campaña. S5 se desbloquea al completar L9 y S6 después de L12. Los seis secretos tienen cierre narrativo y cuentan para el logro correspondiente. La barra fija de controles se retiró, y los cierres ya no acceden a ese elemento inexistente.

En v13.12, `rebuildLevelRoute()` conserva perfiles distintos de terrazas y huecos, pero deja L19 fuera de la plantilla: `makeL19FairMap()` define su secuencia particular de saltos cortos, descansos, checkpoints y desvío alto opcional. Las válvulas de L17 se sitúan en dos tramos separados para evitar repeticiones sin uso. `anchorFloatingFragments()` apoya los objetos F en una plataforma cercana antes de que se cargue la campaña. El análisis BFS conservador no sustituye la inspección de colisiones y saltos en juego.

## Combate de Espejo Roto

`js/10_boss.js` administra movimiento, ataques, clones, teletransporte y daño. Desde v13.3 permanece a distancia lateral cercana, señaliza el teletransporte, abre 72 frames de recuperación, acepta golpes de dash durante esa recuperación o cuando descansa y usa un margen de contacto moderado. La Voz Original carga sus retratos direccionales desde `assets/bosses/final/rotations/`; sus clips de acción se mantienen en `la-voz-original/`. Su vida y fases se conservan; las acciones del jugador no cambian.

## Interfaz

- Silkscreen local para UI pixel-art; texto largo en sans serif de lectura.
- Menú de niveles por capítulos y camino serpenteante.
- Pausa con controles reasignados y configuración; inventario translúcido que suspende la simulación.
- Corazones pixel-art con etapas visuales; SVG de objetos y suavizado desactivado.
- No se añadió ningún color neón o degradado.
- Mapa por capítulos en tarjetas, inventario translúcido y tienda como puesto pixel-art; cada pantalla usa texto con jerarquía definida en `css/styles.css`.
- Los créditos usan desplazamiento automático lento, pausado al interactuar; el desplazamiento manual funciona en ambas direcciones.
- Los tres cierres de campaña cambian escenario y utilería según su desenlace.

## Pruebas

En v13.9, el fondo usa edificios con fachadas y tejados por distrito, deterministas y a tres profundidades. `hexToRgb` admite salidas `rgb(...)`, evitando que una mezcla sobre un color rgb termine reutilizando el color previo del canvas. La tienda conserva el sistema de compra/persistencia de `js/29_shop.js` y presenta Mejoras, Suministros y Recuerdos en un nuevo puesto pixel-art. En v13.11 se rehízo su piel, la del inventario y el selector de niveles; se definió la escala tipográfica y se diferenciaron visualmente los tres finales. Los resultados actuales están en [informe v13.11](ACTUALIZACION_v13.11.md); el validador no garantiza cada colisión, salto u orden de aparición. Nara y sus mecánicas permanecen intactas.

### Auditoría complementaria · 30-10-2026

El modo se controla desde `setSessionMode()` (`single`, `local-coop`,
`online-coop`) y no se persiste en el guardado. El cliente remoto descarta
eventos de conexiones WebSocket ya reemplazadas. El precargador de Nara
solicita únicamente los frames idle existentes; no cambia sus gráficos,
animaciones, controles ni físicas.

La suite actual verificó los 46 módulos JavaScript, los 27 niveles con BFS y
13/13 flujos en Chrome, incluidas las regresiones de modo individual y cierre
tardío de WebSocket, sin errores de página ni recursos fallidos. Detalle:
[auditoría del prompt maestro](AUDITORIA_PROMPT_MAESTRO_2026-10-30.md).
